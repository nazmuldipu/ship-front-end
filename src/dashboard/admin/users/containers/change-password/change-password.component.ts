import { Component, OnInit } from '@angular/core';
import { UserPage, User } from 'src/shared/models/user.model';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  userPage: UserPage;
  user: User;
  loading = false;
  successMessage = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserPage();
  }

  async getUserPage(page: number = 0, role: string = null) {
    this.loading = true;
    await this.userService.getAdminUsers(page, role).subscribe(
      data => {
        this.userPage = data;
        this.loading = false;
      },
      error => console.log('User list loading error!', error)
    );
  }

  onEdit(id: number) {
    this.successMessage = false;
    const value = this.userPage.content.find(u => u.id === id);
    this.user = { ...value };
  }

  async onFindByPhone(phone) {
    await this.userService.searchAdminUser(phone).subscribe(data => {
      this.successMessage = false;
      this.user = data;
    });
  }

  async onChangePassword(user) {
    console.log(user.id, user.password);
    await this.userService
      .changePasswordByAdmin(user.id, user.password)
      .subscribe(data => {
        this.user = null;
        this.successMessage = true;
        console.log(data);
      });
  }
}
