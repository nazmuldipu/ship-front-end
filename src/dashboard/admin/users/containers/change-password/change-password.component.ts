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
  query: string;
  loading = false;
  successMessage = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserPage();
  }

  // async getUserPage(page: number = 0, role: string = null) {
  //   this.loading = true;
  //   // try { } catch (err) { console.log(err) }
  //   try {
  //     this.userPage = await this.userService.getAdminUsers(page, role).toPromise();
  //     this.loading = false;
  //   } catch (err) { console.log(err) }
  // }

  async getUserPage(page: number = 0, query: string = null, role: string = null) {
    this.loading = true;
    try {
      this.userPage = await this.userService.findByUsernameOrPhoneNumber(query, role, page).toPromise();
      this.loading = false;
    } catch (err) { console.log(err) }
  }

  onEdit(id: number) {
    this.successMessage = false;
    const value = this.userPage.content.find(u => u.id === id);
    this.user = { ...value };
  }

  async onFindByPhone(phone) {
    // await this.userService.searchAdminUser(phone).subscribe(data => {
    //   this.successMessage = false;
    //   this.user = data;
    // });
  }

  searchUser() {
    this.getUserPage(0, this.query);
  }
  async onChangePassword(user) {
    try {
      const resp = await this.userService.changePasswordByAdmin(user.id, user.password).toPromise();
      this.user = null;
      this.successMessage = true;
    } catch (err) { console.log(err) }
  }
}
