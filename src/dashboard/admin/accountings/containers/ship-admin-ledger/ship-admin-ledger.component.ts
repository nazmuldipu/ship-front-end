import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { User, UserPage } from 'src/shared/models/user.model';
import { Ship } from 'src/shared/models/ship.model';
import { AccountingService } from 'src/service/accounting.service';
import { ShipAdminLedger } from 'src/shared/models/ship-admin-ledger.model';

@Component({
  selector: 'app-ship-admin-ledger',
  templateUrl: './ship-admin-ledger.component.html',
  styleUrls: ['./ship-admin-ledger.component.scss']
})
export class ShipAdminLedgerComponent implements OnInit {
  user: User;
  shipList: Ship[] = [];
  shipAdminLedgerPage: ShipAdminLedger;

  constructor(private userService: UserService, private accountingService: AccountingService) { }

  ngOnInit() { }

  onSelectAdmin(event: User) {
    this.user = event;
    this.getAdminShipList(event.id);
    this.getShipAdminLedgerPage(event.id);
  }

  async getAdminShipList(userId: number) {
    this.shipList = [];
    try {
      this.shipList = await this.userService.getAdminShipListByUserId(userId).toPromise();
    } catch (err) { console.log(err) }
  }

  async getShipAdminLedgerPage(userId: number, page: number = 0) {
    try {
      this.shipAdminLedgerPage = await this.accountingService.getShipAdminLedger(userId, page).toPromise();
    } catch (err) { console.log(err) }
  }
}
