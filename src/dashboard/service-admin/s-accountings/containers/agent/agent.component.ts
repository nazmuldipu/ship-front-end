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
  ship: Ship;
  user: User;
  userPage: UserPage;
  shipAgentLedgerPage: ShipAgentLedgerPage;
  loading = true;
  shortUserList = true;
  message = '';
  amount = 0;

  constructor(
    private userService: UserService,
    private accountingService: AccountingService
  ) {}

  ngOnInit() {}

  onShipSelect(ship: Ship) {
    this.ship = ship;
    this.getServiceAdminAgents(ship.id);
    this.clear();
  }

  async getServiceAdminAgents(shipId: number, page: number = null) {
    await this.userService
      .getServiceAdminAgents(shipId, page)
      .subscribe(data => {
        this.userPage = data;
      });
  }

  onSelectUser(event) {
    this.user = this.userPage.content.find(u => u.id == event);
    this.getServiceAdminAgentLedger(event);
  }

  async getServiceAdminAgentLedger(userId, page: number = null) {
    await this.accountingService
      .getServiceAdminAgentLedger(userId, page)
      .subscribe(data => {
        this.shipAgentLedgerPage = data;
      });
  }

  async addBalace() {
    if (
      confirm(
        'Are you sure to add balance ' +
          this.amount +
          ' to ' +
          this.user.name +
          ' Account '
      )
    ) {
      this.accountingService
        .addServiceAdminAgentBalance(this.user.id, this.ship.id, this.amount)
        .subscribe(data => {
          this.message = 'Amount added successfully';
          this.amount = 0;
          this.getServiceAdminAgentLedger(this.user.id);
        });
    }
  }

  clear() {
    this.message = '';
    this.user = null;
    this.shipAgentLedgerPage = null;
  }
}
