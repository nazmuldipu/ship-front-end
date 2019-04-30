import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'find-user-form',
  templateUrl: './find-user-form.component.html',
  styleUrls: ['./find-user-form.component.scss']
})
export class FindUserFormComponent implements OnInit {
  @Output() phone = new EventEmitter<String>();

  form: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.builder.group({
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$')
        ]
      ]
    });
  }

  submit() {
    if (this.form.valid) {
      this.phone.emit(this.form.controls.phoneNumber.value);
    }
  }
}
