import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserPage, User } from 'src/shared/models/user.model';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'ship-admin-list',
  templateUrl: './ship-admin-list.component.html',
  styleUrls: ['./ship-admin-list.component.scss']
})
export class ShipAdminListComponent implements OnInit {
  @Output() admin = new EventEmitter<User>();

  userPage: UserPage;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getShipAdminList();
  }

  async getShipAdminList(page: number = 0) {
    await this.userService.getAllShipAdminList(page).subscribe(data => {
      this.userPage = data;
    })
  }

  onSelectAdmin(uid) {
    const user = this.userPage.content.find(u => u.id == uid);
    this.admin.emit(user);
  }
}
