import { Component, OnInit } from '@angular/core';
import { AdminAgentLedgerPage } from 'src/shared/models/admin-agent-ledger.model';
import { AccountingService } from 'src/service/accounting.service';

@Component({
  selector: 'app-my-ledger',
  templateUrl: './my-ledger.component.html',
  styleUrls: ['./my-ledger.component.scss']
})
export class MyLedgerComponent implements OnInit {
  adminAgentLedgerPage: AdminAgentLedgerPage;

  constructor(private accountingService: AccountingService) { }

  ngOnInit() {
    this.getMyLedger();
  }

  async getMyLedger(page: number = 0) {
    try {
      this.adminAgentLedgerPage = await this.accountingService.getAdminAgentMyLedger(page).toPromise();
    } catch (err) { console.log(err); }
  }
}
