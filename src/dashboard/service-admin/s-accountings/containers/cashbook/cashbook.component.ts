import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { AccountingService } from 'src/service/accounting.service';
import { ShipCashbookPage } from 'src/shared/models/ship-cashbook';
import { ShipAdminCashbookPage } from 'src/shared/models/ship-admin-cashbook.model';

@Component({
  selector: 'app-cashbook',
  templateUrl: './cashbook.component.html',
  styleUrls: ['./cashbook.component.scss']
})
export class CashbookComponent implements OnInit {
  shipAdminCashbookPage: ShipAdminCashbookPage;
  loading = false;

  constructor(private accountingService: AccountingService) { }

  ngOnInit() {
    this.getShipAdminCashbook()
  }

  async getShipAdminCashbook(page: number = 0) {
    this.loading = true;
    try {
      this.shipAdminCashbookPage = await this.accountingService.getShipAdminCashbook(page).toPromise();
      this.loading = false;
    } catch (err) { console.log(err) }
  }
}
