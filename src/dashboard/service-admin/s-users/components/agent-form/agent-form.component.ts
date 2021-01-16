import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { User } from 'src/shared/models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'agent-form',
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.scss']
})
export class AgentFormComponent implements OnChanges {
  @Input() user: User;
  @Output() create = new EventEmitter<User>();
  @Output() removeAgent = new EventEmitter<number>();

  form: FormGroup;
  exists = false;

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && this.user && this.user.id) {
      const value = {
        name: this.user.name,
        phoneNumber: this.user.phoneNumber,
        email: this.user.email,
        commission: this.user.commission,
        canReserve: this.user.canReserve == null ? false : this.user.canReserve,
        canCancelReservation: this.user.canCancelReservation == null ? false : this.user.canCancelReservation,
        canCancelBooking: this.user.canCancelBooking == null ? false : this.user.canCancelBooking
      };
      // this.form.reset();
      this.onClear();
      this.exists = true;
      this.form.patchValue({ ...value });
    }
  }

  createForm() {
    this.form = this.builder.group({
      name: ['', Validators.required],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$')
        ]
      ],
      email: '',
      commission: ['', Validators.required],
      canReserve: [false, Validators.required],
      canCancelReservation: [false, Validators.required],
      canCancelBooking: [false, Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      if (this.exists) {
        const value = { ...this.user, ...this.form.value };
        this.create.emit(value);
      } else {
        this.create.emit(this.form.value);
      }
      this.onClear();
    }
  }

  onRemoveAgent(userId: number) {
    this.removeAgent.emit(userId);
    this.onClear();
  }

  onClear() {
    this.form.reset();
    const value = { "name": "", "phoneNumber": "", "email": "", "commission": "", "canReserve": false, "canCancelReservation": false, "canCancelBooking": false }
    this.form.patchValue(value);
    this.exists = false;
  }
}
