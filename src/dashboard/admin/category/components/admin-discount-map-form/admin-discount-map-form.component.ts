import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
  Input
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/shared/models/category.model';

@Component({
  selector: 'admin-discount-map-form',
  templateUrl: './admin-discount-map-form.component.html',
  styleUrls: ['./admin-discount-map-form.component.scss']
})
export class AdminDiscountMapFormComponent implements OnChanges {
  @Input() category: Category;
  @Output() close = new EventEmitter<any>();
  @Output() create = new EventEmitter<any>();

  form: FormGroup;
  mouseoverShifting = false;

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.category) {
      const value = { categoryId: this.category.id };
      this.form.patchValue(value);
    }
  }

  createForm() {
    this.form = this.builder.group({
      categoryId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
      this.form.reset();
      const value = { categoryId: this.category.id };
      this.form.patchValue(value);
    }
  }

  onCloseFrom() {
    this.close.emit(false);
  }
}
