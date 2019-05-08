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
  selector: 'service-admin-income-expense-form',
  templateUrl: './service-admin-income-expense-form.component.html',
  styleUrls: ['./service-admin-income-expense-form.component.scss']
})
export class ServiceAdminIncomeExpenseFormComponent implements OnChanges {
  @Input() expenseForm: boolean;
  @Output() value = new EventEmitter<any>();
  form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.expenseForm) {
      if (changes.expenseForm.currentValue == true) {
        const value = { debit: 0 };
        this.form.patchValue(value);
      } else {
        const value = { credit: 0 };
        this.form.patchValue(value);
      }
    }
  }

  createForm() {
    this.form = this.builder.group({
      explanation: ['', Validators.required],
      debit: ['', Validators.required],
      credit: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.value.emit(this.form.value);
      this.form.reset();
    }
  }
}
