import { Component } from '@angular/core';
import { AccountingService } from 'src/service/accounting.service';
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

  async getShipAdminCashbook(page: number = 0) {
    this.loading = true;
    try {
      this.shipAdminCashbookPage = await this.accountingService.getShipAdminCashbook(page).toPromise();
      this.loading = false;
    } catch (err) { console.log(err) }
  }

  async onSubmit({ explanation, debit, credit }) {
    try {
      await this.accountingService.addServiceAdminIncome(debit, explanation).toPromise();
      console.log('Success');
      this.getShipAdminCashbook();
    } catch (err) { console.log(err) }
  }
}
