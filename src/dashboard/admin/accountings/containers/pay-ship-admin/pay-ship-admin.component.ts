import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/models/user.model';
import { AccountingService } from 'src/service/accounting.service';
import { ShipAdminLedger } from 'src/shared/models/ship-admin-ledger.model';

@Component({
  selector: 'app-pay-ship-admin',
  templateUrl: './pay-ship-admin.component.html',
  styleUrls: ['./pay-ship-admin.component.scss']
})
export class PayShipAdminComponent implements OnInit {
  amount: number;
  user: User;
  shipAdminLedgerPage: ShipAdminLedger;

  constructor(private accountingService: AccountingService) { }

  ngOnInit() {
  }

  onSelectAdmin(event: User) {
    this.user = event;
    this.getShipAdminLedgerPage(event.id);
  }

  async getShipAdminLedgerPage(userId: number, page: number = 0) {
    await this.accountingService.getShipAdminLedger(userId, page).subscribe(data => {
      this.shipAdminLedgerPage = data;
    })
  }

  addBalace() {
    if (
      confirm(
        'Are you sure to add balance ' +
        this.amount +
        ' to ' +
        this.user.name +
        ' Account '
      )
    ) {
      this.accountingService.payToShipAdmin(this.user.id, this.amount).subscribe(data => {
        this.amount = 0;
        this.getShipAdminLedgerPage(this.user.id);
      })
    }
  }

}
