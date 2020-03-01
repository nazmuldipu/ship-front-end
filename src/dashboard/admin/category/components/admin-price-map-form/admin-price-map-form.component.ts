import { Component, OnInit, OnChanges, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Category } from 'src/shared/models/category.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'admin-price-map-form',
  templateUrl: './admin-price-map-form.component.html',
  styleUrls: ['./admin-price-map-form.component.scss']
})
export class AdminPriceMapFormComponent implements OnChanges {
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
