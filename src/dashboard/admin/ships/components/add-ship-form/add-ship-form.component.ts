import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { Destinations } from 'src/shared/models/enums.model';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'add-ship-form',
  templateUrl: './add-ship-form.component.html',
  styleUrls: ['./add-ship-form.component.scss']
})
export class AddShipFormComponent implements OnChanges {
  @Input() ship: Ship;

  @Output() create = new EventEmitter<Ship>();
  @Output() update = new EventEmitter<Ship>();

  time = { hour: 13, minute: 30 };

  form: FormGroup;
  startingPoints = Destinations;
  droppingPoints = Destinations;
  exists = false;
  mouseoverShifting = false;

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  ngOnChanges() {
    if (this.ship != null && this.ship.id != null) {
      this.exists = true;
      this.form.patchValue(this.ship);
    }
  }

  createForm() {
    this.form = this.builder.group({
      name: ['', Validators.required],
      shipNumber: ['', Validators.required],
      quality: ['', Validators.required],
      kidsPolicy: ['', Validators.required],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$')
        ]
      ],
      floor: ['', Validators.required],
      size: ['', Validators.required],
      startingPoint: ['', Validators.required],
      droppingPoint: ['', Validators.required],
      startTime: ['', Validators.required],
      route: ['', Validators.required],
      description: ['', Validators.required],
      ac: false,
      containCabin: false,
      online: false,
      discount: [0, Validators.required],
      hotelswavePercentage: [0, Validators.required],
      shipFacilities: this.builder.group({
        casino: false,
        shops: false,
        spa: false,
        fitnessCenter: false,
        library: false,
        theatre: false,
        cinema: false,
        swimmingPool: false,
        hotTub: false,
        restaurant: false,
        lounges: false,
        gym: false,
        bar: false,
        wifi: false,
        kidsPlayRoom: false
      })
    });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.controls.startTime.value as any;
      const hour = value.hour < 10 ? '0'+value.hour : value.hour;
      const min = value.minute < 10 ? '0'+value.minute : value.minute;
      this.form.controls.startTime.setValue(hour + ':' + min);
      if (this.exists) {
        this.update.emit(this.form.value);
      } else {
        this.create.emit(this.form.value);
      }
      this.form.reset();
      // this.createForm();
    }
  }

  getFormValidationErrors() {
    let errors = '';
    var shipFacilities = <FormGroup>this.form.get('shipFacilities');
    errors += this.getFormGroupValidationErrors(this.form);
    errors += this.getFormGroupValidationErrors(shipFacilities);
    return errors;
  }

  getFormGroupValidationErrors(fg: FormGroup) {
    let errors = '';
    Object.keys(fg.controls).forEach(key => {
      const controlErrors: ValidationErrors = fg.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          errors += key + ' : ' + keyError + '; ';
        });
      }
    });
    return errors;
  }
}
