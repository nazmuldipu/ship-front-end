import { Component, OnInit } from '@angular/core';
import { AccountingService } from 'src/service/accounting.service';
import { AdminShipLedgerPage } from 'src/shared/models/admin-ship-ledger.model';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-ship-ledger',
  templateUrl: './ship-ledger.component.html',
  styleUrls: ['./ship-ledger.component.scss']
})
export class ShipLedgerComponent implements OnInit {
  shipId: number;
  adminShipLedgerPage: AdminShipLedgerPage;

  constructor(private accountingService: AccountingService) {}

  ngOnInit() {}

  onShipId(ship: Ship) {
    this.shipId = ship.id;
    this.getAdminShipLedgerByShipId(this.shipId);
  }

  async getAdminShipLedgerByShipId(shipId: number, page: number = 0) {
    await this.accountingService
      .getAdminShipLedger(shipId, page)
      .subscribe(data => {
        this.adminShipLedgerPage = data;
      });
  }
}
