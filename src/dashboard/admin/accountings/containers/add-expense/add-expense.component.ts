import { Component, OnInit } from '@angular/core';
import { AdminCashbookPage } from 'src/shared/models/admin-cashbook.model';
import { AccountingService } from 'src/service/accounting.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  adminCashbookPage: AdminCashbookPage;
  expenseForm = true;

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
      const resp = this.accountingService.addAdminExpense(credit, explanation).toPromise();
      this.getAdminCashbook();
    } catch (err) { console.log(err) }
  }
}
