import { Component, OnInit } from '@angular/core';
import { AccountingService } from 'src/service/accounting.service';
import { UserService } from 'src/service/user.service';
import { ShipAgentLedgerPage } from 'src/shared/models/ship-agent-ledger.model';
import { User, UserPage } from 'src/shared/models/user.model';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {
  user: User;
  userPage: UserPage;
  shipAgentLedgerPage: ShipAgentLedgerPage;
  amount: number;

  constructor(
    private userService: UserService,
    private accountingService: AccountingService
  ) { }

  ngOnInit() {
    this.getServiceAdminAgents();
  }

  async getServiceAdminAgents(page: number = 0) {
    try {
      this.userPage = await this.userService.getServiceAdminAgents(page).toPromise();
    } catch (err) { console.log(err) }

  }

  onSelectAgent(event) {
    const user = this.userPage.content.find(u => u.id == event);
    this.user = user;
    this.getShipAgentLedger(event);
  }

  async getShipAgentLedger(agentId: number, page: number = 0) {
    try {
      this.shipAgentLedgerPage = await this.accountingService.getServiceAdminAgentLedger(agentId, page).toPromise();
    } catch (err) { console.log(err) }
  }

  async addAgentBalace() {
    if (
      confirm('Are you sure to add balance ' + this.amount + ' to ' + this.user.name + ' Account ')) {
      try {
        const resp = await this.accountingService.addServiceAdminAgentBalance(this.user.id, this.amount).toPromise();
        this.amount = null;
        this.shipAgentLedgerPage = null;
        this.getShipAgentLedger(this.user.id)
      } catch (err) { console.log(err) }
    }
  }
}
