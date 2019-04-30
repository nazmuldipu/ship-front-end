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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserPage();
  }

  async getUserPage(page: number = null, role: string = null) {
    this.userService.getAdminUsers(page, role).subscribe(data => {
      this.userPage = data;
    });
  }

  async getUser(id: number) {
    await this.userService.getAdminUser(id).subscribe(data => {
      this.user = data;
    });
  }

  onRoleChange(roleValue: string) {
    this.role = roleValue.length > 0 ? roleValue : null;
    this.getUserPage(0, this.role);
  }

  onEdit(id: number) {
    const value = this.userPage.content.find(u => u.id === id) as User;
    this.user = value;
  }

  chageRole(id, role) {
    this.userService.changeAdminUserRole(id, role).subscribe(
      data => {
        this.userPage.content.splice(
          this.userPage.content.findIndex(p => p.id === data.id),
          1,
          data
        );
        if (this.user) {
          this.getUser(this.user.id);
        }
      },
      error => console.log('Role change failed', error)
    );
  }

  activate(id) {
    let status;
    if (this.user) {
      status = !this.user.enabled;
    } else {
      status = !this.userPage.content.find(p => p.id === id).enabled;
    }

    this.userService.changeAdminUserEnable(id, status).subscribe(
      data => {
        this.userPage.content.splice(
          this.userPage.content.findIndex(p => p.id === data.id),
          1,
          data
        );
        if (this.user) {
          this.getUser(this.user.id);
        }
      },
      error => console.log('Status change failed', error)
    );
  }

  clear() {
    this.user = null;
  }
}
