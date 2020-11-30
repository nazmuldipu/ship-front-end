import { Component, OnInit } from '@angular/core';
import { AdminCashbookPage } from 'src/shared/models/admin-cashbook.model';
import { AccountingService } from 'src/service/accounting.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {
  adminCashbookPage: AdminCashbookPage;
  expenseForm = false;

  constructor(private accountingService: AccountingService) { }

  ngOnInit() {
    this.getAdminCashbook();
  }

  async getAdminCashbook(page: number = 0) {
    try {
      this.adminCashbookPage = await this.accountingService.getAdminCashbook(page).toPromise();
    } catch (err) { console.log(err) }
  }

  async onSubmit({ explanation, debit, credit }) {
    try {
      const resp = await this.accountingService.addAdminIncome(debit, explanation).toPromise();
      this.getAdminCashbook();
    } catch (err) { console.log(err) }
  }
}
