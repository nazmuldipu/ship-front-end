import {
  Component,
  OnInit,
  OnChanges,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { Category } from 'src/shared/models/category.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'category-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnChanges {
  @Input() ship: Ship;
  @Input() category: Category;

  @Output() create = new EventEmitter<Category>();
  @Output() update = new EventEmitter<Category>();

  form: FormGroup;
  exists = false;
  mouseoverShifting = false;

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  ngOnChanges() {
    if (this.ship) {
      const ship = { ship: { id: this.ship.id } };
      this.form.patchValue(ship);
    }
    if (this.category && this.category.id) {
      this.exists = true;
      const value = {
        ...this.category
      };
      this.form.patchValue(value);
    }
  }

  createForm() {
    this.form = this.builder.group({
      name: ['', Validators.required],
      seatQuality: ['', Validators.required],
      floorNumber: ['', Validators.required],
      description: ['', Validators.required],
      fare: ['', Validators.required],
      discount: ['', Validators.required],
      agentDiscount: ['', Validators.required],
      categoryFacilities: this.builder.group({
        topFloor: false,
        ac: false,
        freeBreakfast: false
      }),
      ship: this.builder.group({
        id: ['', Validators.required]
      })
    });
  }

  submit() {
    if (this.form.valid) {
      if (this.exists) {
        this.update.emit(this.form.value);
      } else {
        this.create.emit(this.form.value);
      }
      this.exists = false;
      this.form.reset();
      if (this.ship) {
        const ship = { ship: { id: this.ship.id } };
        this.form.patchValue(ship);
      }
    }
  }
}
