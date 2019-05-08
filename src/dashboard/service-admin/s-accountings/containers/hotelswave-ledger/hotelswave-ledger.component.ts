import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { AccountingService } from 'src/service/accounting.service';
import { AdminShipLedgerPage } from 'src/shared/models/admin-ship-ledger.model';

@Component({
  selector: 'app-hotelswave-ledger',
  templateUrl: './hotelswave-ledger.component.html',
  styleUrls: ['./hotelswave-ledger.component.scss']
})
export class HotelswaveLedgerComponent implements OnInit {
  ship: Ship;
  adminShipLedgerPage: AdminShipLedgerPage;
  loading = false;

  constructor(private accountingService: AccountingService) {}

  ngOnInit() {}

  onShipSelect(ship: Ship) {
    this.ship = ship;
    this.getServiceAdminHotelswaveLedger(ship.id);
  }

  async getServiceAdminHotelswaveLedger(shipId: number, page: number = null) {
    this.loading = true;
    await this.accountingService
      .getServiceAdminHotelswaveLedger(shipId, page)
      .subscribe(data => {
        this.adminShipLedgerPage = data;
        this.loading = false;
      });
  }
}
