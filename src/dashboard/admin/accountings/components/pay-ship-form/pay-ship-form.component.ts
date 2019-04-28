import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pay-ship-form',
  templateUrl: './pay-ship-form.component.html',
  styleUrls: ['./pay-ship-form.component.scss']
})
export class PayShipFormComponent implements OnChanges {
  @Input() shipId: number;
  @Output() value = new EventEmitter<any>();
  form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.shipId) {
      const value = { shipId: this.shipId };
      this.form.patchValue(value);
    }
  }

  createForm() {
    this.form = this.builder.group({
      shipId: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.value.emit(this.form.value);
      this.form.reset();
    }
  }
}
