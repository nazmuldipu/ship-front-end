import { Component, OnInit } from '@angular/core';
import { AdminAgentLedgerPage } from 'src/shared/models/admin-agent-ledger.model';
import { UserPage, User } from 'src/shared/models/user.model';
import { UserService } from 'src/service/user.service';
import { AccountingService } from 'src/service/accounting.service';

@Component({
  selector: 'app-agent-balance',
  templateUrl: './agent-balance.component.html',
  styleUrls: ['./agent-balance.component.scss']
})
export class AgentBalanceComponent implements OnInit {
  adminAgentLedgerPage: AdminAgentLedgerPage;
  userPage: UserPage;
  user: User;
  amount = 0;

  loading = false;
  message = '';

  constructor(
    private userService: UserService,
    private accountingService: AccountingService
  ) { }

  ngOnInit() {
    this.getUserPage();
  }

  async getUserPage(page: number = 0) {
    this.loading = true;
    try {
      this.userPage = await this.userService.getAdminAgents(page).toPromise();
      this.loading = false;
    } catch (err) { console.log(err); }
  }

  onSelect(id: number) {
    const user = this.userPage.content.find(u => u.id === id);
    this.user = { ...user };
    this.getAgentLedger(user.id);
  }

  async getAgentLedger(agentId: number, page: number = 0) {
    this.loading = true;
    try {
      this.adminAgentLedgerPage = await this.accountingService
        .getAdminAgentLedgerByAdmin(agentId, page).toPromise();
      this.loading = false;
    } catch (err) { console.log(err) }
  }

  async addBalace() {
    if (confirm('Are you sure to add balance ' + this.amount + ' to ' + this.user.name + ' Account ')) {
      try {
        const resp = await this.accountingService
          .addAdminAgentBalance(this.user.id, this.amount).toPromise();
        this.message = 'Amount added successfully';
        this.amount = 0;
        this.getAgentLedger(this.user.id);
      } catch (err) { console.log(err) }
    }
  }

  clear() {
    this.message = '';
    this.user = null;
  }
}
