import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { AccountingService } from 'src/service/accounting.service';
import { ShipCashbookPage } from 'src/shared/models/ship-cashbook';

@Component({
  selector: 'app-cashbook',
  templateUrl: './cashbook.component.html',
  styleUrls: ['./cashbook.component.scss']
})
export class CashbookComponent implements OnInit {
  ship: Ship;
  shipCashbookPage: ShipCashbookPage;
  loading = false;
  constructor(private accountingService: AccountingService) {}

  ngOnInit() {}

  onShipSelect(ship: Ship) {
    this.ship = ship;
    this.getServiceAdminCashbookByShipId(ship.id);
  }

  async getServiceAdminCashbookByShipId(shipId: number, page: number = null) {
    this.loading = true;
    await this.accountingService
      .getSeviceAdminShipCashbook(shipId, page)
      .subscribe(data => {
        this.shipCashbookPage = data;
        this.loading = false;
      });
  }
}
