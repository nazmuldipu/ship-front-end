import { Component, OnInit } from '@angular/core';
import { UserPage, User } from 'src/shared/models/user.model';
import { ShipPage, Ship } from 'src/shared/models/ship.model';
import { ShipService } from 'src/service/ship.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-assign-user',
  templateUrl: './assign-user.component.html',
  styleUrls: ['./assign-user.component.scss']
})
export class AssignUserComponent implements OnInit {
  user: User;
  ship: Ship;
  userPage: UserPage;
  shipPage: ShipPage;
  shipUserList: User[] = [];
  userShipList: Ship[] = [];

  constructor(
    private shipService: ShipService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAdminShipPage();
    this.getUserPage();
  }

  async getAdminShipPage(page: number = 0) {
    await this.shipService.getAdminShipPage(page).subscribe(data => {
      this.shipPage = data;
    });
  }

  async getUserPage(page: number = 0, role: string = null) {
    await this.userService
      .getAdminUsers(page, role)
      .subscribe(
        data => (this.userPage = data),
        error => console.log('User list loading error!', error)
      );
  }

  async getUerListByShipId(shipId) {
    this.shipUserList = [];
    await this.userService.gerAdminUserListByShipId(shipId).subscribe(data => {
      this.shipUserList = data;
    });
  }

  async getShipListByUserId(userId) {
    this.userShipList = [];
    await this.userService.getAdminShipListByUserId(userId).subscribe(data => {
      this.userShipList = data;
    })
  }

  onSelectUser(id: number) {
    const value = this.userPage.content.find(u => u.id === id) as User;
    this.user = value;
    this.getShipListByUserId(id);
  }

  onSelectShip(id: number) {
    const value = this.shipPage.content.find(h => h.id === id) as Ship;
    this.ship = value;
    this.getUerListByShipId(id);
  }

  onSubmit() {
    this.userService
      .assignAdminShipAgent(this.user.id, this.ship.id)
      .subscribe(data => {
        this.getUserPage();
        this.onClear();
      });
  }

  onClear() {
    this.ship = null;
    this.user = null;
    this.shipUserList = [];
    this.userShipList = [];
  }
}
