import { Component, OnInit } from '@angular/core';
import { AccountingService } from 'src/service/accounting.service';
import { AdminCashbookPage } from 'src/shared/models/admin-cashbook.model';

@Component({
  selector: 'app-admin-cashbook',
  templateUrl: './admin-cashbook.component.html',
  styleUrls: ['./admin-cashbook.component.scss']
})
export class AdminCashbookComponent implements OnInit {
  adminCashbookPage: AdminCashbookPage;

  constructor(private accountingService: AccountingService) {}

  ngOnInit() {
    this.getAdminCashbook();
  }

  async getAdminCashbook(page: number = 0) {
    // console.log(page);
    await this.accountingService.getAdminCashbook(page).subscribe(data => {
      this.adminCashbookPage = data;
    });
  }
}
