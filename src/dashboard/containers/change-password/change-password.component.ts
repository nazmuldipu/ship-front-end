import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/models/user.model';
import { AuthService } from 'src/service/auth.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  user: User;
  successMessage = false;

  constructor(
    private authSerivce: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.authSerivce.getCurrentUser();
  }

  async onChangePassword(user) {
    await this.userService
      .changePassword(user.id, user.password)
      .subscribe(data => {
        this.user = null;
        this.successMessage = true;
      });
  }
}
