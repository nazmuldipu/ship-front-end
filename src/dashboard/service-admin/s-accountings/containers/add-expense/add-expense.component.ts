import { Component } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { ShipCashbookPage } from 'src/shared/models/ship-cashbook';
import { AccountingService } from 'src/service/accounting.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent {
  ship: Ship;
  shipCashbookPage: ShipCashbookPage;
  loading = false;
  expenseForm = true;

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
      .addServiceAdminExpense(this.ship.id, credit, explanation)
      .subscribe(data => {
        console.log('Success');
        this.getServiceAdminCashbookByShipId(this.ship.id);
      });
  }
}
