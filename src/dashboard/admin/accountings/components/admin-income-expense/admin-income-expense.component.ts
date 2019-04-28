import {
  Component,
  OnInit,
  SimpleChanges,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'admin-income-expense',
  templateUrl: './admin-income-expense.component.html',
  styleUrls: ['./admin-income-expense.component.scss']
})
export class AdminIncomeExpenseComponent implements OnChanges {
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
