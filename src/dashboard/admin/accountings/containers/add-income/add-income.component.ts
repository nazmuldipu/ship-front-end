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

  constructor(private accountingService: AccountingService) {}

  ngOnInit() {
    this.getAdminCashbook();
  }

  async getAdminCashbook(page: number = 0) {
    await this.accountingService.getAdminCashbook(page).subscribe(data => {
      this.adminCashbookPage = data;
    });
  }

  onSubmit({ explanation, debit, credit }) {
    this.accountingService
      .addAdminIncome(debit, explanation)
      .subscribe(data => {
        this.getAdminCashbook();
      });
  }
}
