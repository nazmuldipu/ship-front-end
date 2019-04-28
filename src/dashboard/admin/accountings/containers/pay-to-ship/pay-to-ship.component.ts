import { Component, OnInit } from '@angular/core';
import { AdminShipLedgerPage } from 'src/shared/models/admin-ship-ledger.model';
import { AccountingService } from 'src/service/accounting.service';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-pay-to-ship',
  templateUrl: './pay-to-ship.component.html',
  styleUrls: ['./pay-to-ship.component.scss']
})
export class PayToShipComponent implements OnInit {
  shipId: number;
  adminShipLedgerPage: AdminShipLedgerPage;

  constructor(private accountingService: AccountingService) {}

  ngOnInit() {}

  onSelectShip(event: Ship) {
    this.shipId = event.id;
    this.getAdminShipLedgerByShipId(this.shipId);
  }

  async getAdminShipLedgerByShipId(hotelId: number, page: number = 0) {
    await this.accountingService
      .getAdminShipLedger(hotelId, page)
      .subscribe(data => {
        this.adminShipLedgerPage = data;
      });
  }

  onSubmit({ shipId, amount }) {
    this.shipId = null;
    this.adminShipLedgerPage = null;
    this.accountingService.payToShip(shipId, amount).subscribe(data => {
      this.getAdminShipLedgerByShipId(shipId);
    });
  }
}
