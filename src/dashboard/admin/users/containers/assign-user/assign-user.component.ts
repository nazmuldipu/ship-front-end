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
  userPage: UserPage;
  user: User;
  shipPage: ShipPage;
  ship: Ship;

  constructor(
    private shipService: ShipService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getAdminShipPage();
    this.getUserPage();
  }
  async getAdminShipPage(page: number = 0) {
    await this.shipService.getAdminShipPage(page).subscribe(data => {
      this.shipPage = data;
    });
  }
  // async getAdminHotelPage(page: number = 0) {
  //   await this.hotelService.getAdminHotelPage().subscribe(data => {
  //     this.hotelPage = data;
  //   });
  // }
  async getUserPage(page: number = 0, role: string = null) {
    await this.userService
      .getAdminUsers(page, role)
      .subscribe(
        data => (this.userPage = data),
        error => console.log('User list loading error!', error)
      );
  }

  onSelectUser(id: number) {
    const value = this.userPage.content.find(u => u.id === id) as User;
    this.user = value;
  }

  onSelectShip(id: number) {
    const value = this.shipPage.content.find(h => h.id === id) as Ship;
    this.ship = value;
  }

  onSaveRole(event) {
    this.userService
      .assignAdminShip(this.user.id, this.ship.id, event.role)
      .subscribe(data => {
        this.getUserPage();
        this.onCloseForm();
        console.log('Assign user success');
      });
  }

  onCloseForm() {
    this.ship = null;
    this.user = null;
  }
}
