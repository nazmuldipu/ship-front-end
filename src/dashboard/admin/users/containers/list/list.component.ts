import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { UserPage, User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  userPage: UserPage;
  user: User;
  role: string;
  query: string;
  loading = false;

  constructor(private userService: UserService) {
    console.log('Yureka')
  }

  ngOnInit() {
    this.getUserPage();
    console.log('OK')
  }

  // async getUserPage(page: number = 0, role: string = null) {
  //   try {
  //     this.userPage = await this.userService.getAdminUsers(page, role).toPromise();
  //     console.log(this.userPage);
  //   } catch (err) { console.log(err) }
  // }

  async getUserPage(page: number = 0, query: string = null, role: string = null) {
    this.loading = true;
    try {
      this.userPage = await this.userService.findByUsernameOrPhoneNumber(query, role, page).toPromise();
      this.loading = false;
    } catch (err) { console.log(err) }
  }

  searchUser() {
    this.getUserPage(0, this.query, this.role);
  }

  async getUser(id: number) {
    try {
      this.user = await this.userService.getAdminUser(id).toPromise();
    } catch (err) { console.log(err) }
  }

  onRoleChange(roleValue: string) {
    this.role = roleValue.length > 0 ? roleValue : null;
    this.getUserPage(0, null, this.role);
  }

  onEdit(id: number) {
    const value = this.userPage.content.find(u => u.id === id) as User;
    this.user = value;
  }

  async chageRole(id, role) {
    try {
      const resp: User = await this.userService.changeAdminUserRole(id, role).toPromise();
      this.userPage.content.splice(
        this.userPage.content.findIndex(p => p.id === resp.id), 1, resp);
      if (this.user) {
        this.getUser(this.user.id);
      }
    } catch (err) { console.log(err) }
  }

  async activate(id) {
    let status;
    if (this.user) {
      status = !this.user.enabled;
    } else {
      status = !this.userPage.content.find(p => p.id === id).enabled;
    }
    try {
      const resp = await this.userService.changeAdminUserEnable(id, status).toPromise();
      this.userPage.content.splice(this.userPage.content.findIndex(p => p.id === resp.id), 1, resp);
      if (this.user) {
        this.getUser(this.user.id);
      }
    } catch (err) { console.log(err) }
    // this.userService.changeAdminUserEnable(id, status).subscribe(
    //   data => {
    //     this.userPage.content.splice(
    //       this.userPage.content.findIndex(p => p.id === data.id),
    //       1,
    //       data
    //     );
    //     if (this.user) {
    //       this.getUser(this.user.id);
    //     }
    //   },
    //   error => console.log('Status change failed', error)
    // );
  }

  clear() {
    this.user = null;
  }
}
