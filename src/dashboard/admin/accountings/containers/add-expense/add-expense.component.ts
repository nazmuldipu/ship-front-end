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

  constructor(private accountingService: AccountingService) {}

  ngOnInit() {
    this.getAdminCashbook();
  }

  getAdminCashbook(page: number = 0) {
    this.accountingService.getAdminCashbook(page).subscribe(data => {
      this.adminCashbookPage = data;
    });
  }

  onSubmit({ explanation, debit, credit }) {
    this.accountingService
      .addAdminExpense(credit, explanation)
      .subscribe(data => {
        this.getAdminCashbook();
      });
  }
}
