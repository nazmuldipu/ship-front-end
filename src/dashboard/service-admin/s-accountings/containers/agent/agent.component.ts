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

  async getServiceAdminAgents(page: number = null) {
    this.userService.getServiceAdminAgents(page).subscribe(data => {
      console.log(data);
      this.userPage = data;
    });
  }

  onSelectAgent(event) {
    const user = this.userPage.content.find(u => u.id == event);
    this.user = user;
    this.getShipAgentLedger(event);
  }

  async getShipAgentLedger(agentId: number, page: number = null) {
    await this.accountingService.getServiceAdminAgentLedger(agentId, page).subscribe(data => {
      this.shipAgentLedgerPage = data;
    })
  }

  async addAgentBalace() {
    if (
      confirm(
        'Are you sure to add balance ' +
        this.amount +
        ' to ' +
        this.user.name +
        ' Account '
      )
    ) {
      await this.accountingService.addServiceAdminAgentBalance(this.user.id, this.amount).subscribe(data => {
        this.amount = null;
        this.shipAgentLedgerPage = null;
        this.getShipAgentLedger(this.user.id)
      })
    }
  }
}
