import { Component } from '@angular/core';
import { AccountingService } from 'src/service/accounting.service';
import { ShipCashbookPage } from 'src/shared/models/ship-cashbook';
import { Ship } from 'src/shared/models/ship.model';
import { ShipAdminCashbookPage } from 'src/shared/models/ship-admin-cashbook.model';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent {
  shipAdminCashbookPage: ShipAdminCashbookPage;
  loading = false;
  expenseForm = false;

  constructor(private accountingService: AccountingService) { }

  ngOnInit() {
    this.getShipAdminCashbook()
  }

  async getShipAdminCashbook(page: number = null) {
    this.loading = true;
    await this.accountingService
      .getShipAdminCashbook(page)
      .subscribe(data => {
        this.shipAdminCashbookPage = data;
        this.loading = false;
      });
  }

  onSubmit({ explanation, debit, credit }) {
    this.accountingService
      .addServiceAdminIncome(debit, explanation)
      .subscribe(data => {
        console.log('Success');
        this.getShipAdminCashbook();
      });
  }
}
