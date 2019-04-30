import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/shared/models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent {
  @Input() user: User;
  @Output() create = new EventEmitter<User>();

  form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.form = this.builder.group({
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit() {
    if (this.form.valid && this.user && this.user.id) {
      const value = {
        id: this.user.id,
        password: this.form.controls.password.value
      } as User;
      this.create.emit(value);
      this.form.reset();
    }
  }
}
