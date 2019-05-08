import { Component } from '@angular/core';
import { AccountingService } from 'src/service/accounting.service';
import { ShipCashbookPage } from 'src/shared/models/ship-cashbook';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent {
  ship: Ship;
  shipCashbookPage: ShipCashbookPage;
  loading = false;
  expenseForm = false;

  constructor(private accountingService: AccountingService) {}

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

  onSubmit({ explanation, debit, credit }) {
    this.accountingService
      .addServiceAdminIncome(this.ship.id, debit, explanation)
      .subscribe(data => {
        console.log('Success');
        this.getServiceAdminCashbookByShipId(this.ship.id);
      });
  }
}
