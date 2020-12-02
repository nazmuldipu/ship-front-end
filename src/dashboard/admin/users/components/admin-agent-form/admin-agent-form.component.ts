import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { User } from 'src/shared/models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'admin-agent-form',
  templateUrl: './admin-agent-form.component.html',
  styleUrls: ['./admin-agent-form.component.scss']
})
export class AdminAgentFormComponent implements OnChanges {
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
      this.exists = true;
      const value = {
        name: this.user.name,
        phoneNumber: this.user.phoneNumber,
        email: this.user.email,
        commission: this.user.commission
      };
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
      commission: ['', Validators.required]
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
    this.exists = false;
  }
}
