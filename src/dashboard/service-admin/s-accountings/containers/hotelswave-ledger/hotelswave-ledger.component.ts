import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { AccountingService } from 'src/service/accounting.service';
import { AdminShipLedgerPage } from 'src/shared/models/admin-ship-ledger.model';
import { ShipAdminLedger, ShipAdminLedgerPage } from 'src/shared/models/ship-admin-ledger.model';

@Component({
  selector: 'app-hotelswave-ledger',
  templateUrl: './hotelswave-ledger.component.html',
  styleUrls: ['./hotelswave-ledger.component.scss']
})
export class HotelswaveLedgerComponent implements OnInit {
  shipAdminLedgerPage: ShipAdminLedgerPage;
  loading = false;

  constructor(private accountingService: AccountingService) { }

  ngOnInit() {
    this.getServiceAdminHotelswaveLedger();
  }

  async getServiceAdminHotelswaveLedger(page: number = 0) {
    this.loading = true;
    try {
      this.shipAdminLedgerPage = await this.accountingService.getServiceAdminHotelswaveLedger(page).toPromise();
      this.loading = false;
    } catch (err) { console.log(err) }
  }
}
