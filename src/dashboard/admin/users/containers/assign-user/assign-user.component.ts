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
    try {
      this.shipPage = await this.shipService.getAdminShipPage(page).toPromise();
    } catch (err) { console.log(err) }
  }

  async getUserPage(page: number = 0, role: string = null) {
    try {
      this.userPage = await this.userService.getAdminUsers(page, role).toPromise();
    } catch (err) { console.log(err) }
  }

  async getUerListByShipId(shipId) {
    this.shipUserList = [];
    try {
      this.shipUserList = await this.userService.gerAdminUserListByShipId(shipId).toPromise();
    } catch (err) { console.log(err) }
  }

  async getShipListByUserId(userId) {
    this.userShipList = [];
    try {
      this.userShipList = await this.userService.getAdminShipListByUserId(userId).toPromise();
    } catch (err) { console.log(err) }
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

  async onSubmit() {
    try {
      const resp = this.userService.assignAdminShipAgent(this.user.id, this.ship.id).toPromise();
      this.getUserPage();
      this.onClear();
    } catch (err) { console.log(err) }
  }

  onClear() {
    this.ship = null;
    this.user = null;
    this.shipUserList = [];
    this.userShipList = [];
  }
}
