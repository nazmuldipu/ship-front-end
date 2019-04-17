import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { Category } from 'src/shared/models/category.model';
import { Seat } from 'src/shared/models/seat.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'seat-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './seat-form.component.html',
  styleUrls: ['./seat-form.component.scss']
})
export class SeatFormComponent implements OnChanges {
  @Input() ship: Ship;
  @Input() category: Category;
  @Input() seat: Seat;

  @Output() create = new EventEmitter<Seat>();
  @Output() update = new EventEmitter<Seat>();

  form: FormGroup;
  exists = false;
  mouseoverShifting = false;

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ship && this.ship.id) {
      const ship = { ship: { id: this.ship.id } };
      this.form.patchValue(ship);
    }
    if (this.category && this.category.id) {
      const category = { category: { id: this.category.id } };
      this.form.patchValue(category);
    }
    if (this.seat && this.seat.id) {
      this.exists = true;
      const value = {
        ...this.seat
      };
      this.form.patchValue(value);
    }
  }

  createForm() {
    this.form = this.builder.group({
      seatNumber: ['', Validators.required],
      // fare: ['', Validators.required],
      // discount: ['', Validators.required],
      // agentDiscount: ['', Validators.required],
      category: this.builder.group({
        id: ['', Validators.required]
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
      // if (this.ship) {
      //   const ship = { ship: { id: this.ship.id } };
      //   this.form.patchValue(ship);
      // }
      // if (this.category && this.category.id) {
      //   const category = { category: { id: this.category.id } };
      //   this.form.patchValue(category);
      // }
    }
  }
}
