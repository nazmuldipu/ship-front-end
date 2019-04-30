import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { User, ERole } from 'src/shared/models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'assign-user-form',
  templateUrl: './assign-user-form.component.html',
  styleUrls: ['./assign-user-form.component.scss']
})
export class AssignUserFormComponent implements OnInit {
  @Input() ship: Ship;
  @Input() user: User;

  @Output() role = new EventEmitter<ERole>();
  @Output() close = new EventEmitter<any>();

  form: FormGroup;
  roleEnum = ERole;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.builder.group({
      role: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.role.emit(this.form.value);
      this.form.reset();
    }
  }

  onClose() {
    this.close.emit();
  }
}
