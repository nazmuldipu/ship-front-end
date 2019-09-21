import { Component, OnInit } from '@angular/core';
import { AccountingService } from 'src/service/accounting.service';
import { ShipAgentLedger } from 'src/shared/models/ship-agent-ledger.model';

@Component({
  selector: 'app-my-ledger',
  templateUrl: './my-ledger.component.html',
  styleUrls: ['./my-ledger.component.scss']
})
export class MyLedgerComponent implements OnInit {
  shipAgentLedger: ShipAgentLedger[];

  constructor(private accountingSrvice: AccountingService) { }

  ngOnInit() {
    this.getShipAdminAgentLedger();
  }


  async getShipAdminAgentLedger(page: number = null) {
    await this.accountingSrvice.getShipAdminAgentLedger(page).subscribe(data => {
      console.log(data);
      this.shipAgentLedger = data;
    })
  }
}
