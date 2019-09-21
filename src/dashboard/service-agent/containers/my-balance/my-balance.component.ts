import { Component, OnInit } from '@angular/core';
import { AccountingService } from 'src/service/accounting.service';

@Component({
  selector: 'app-my-balance',
  templateUrl: './my-balance.component.html',
  styleUrls: ['./my-balance.component.scss']
})
export class MyBalanceComponent implements OnInit {
  balance: number;

  constructor(private accountingSrvice: AccountingService) { }

  ngOnInit() {
    this.getServiceAdminAgentBalance();
  }

  async getServiceAdminAgentBalance() {
    await this.accountingSrvice.getServiceAdminAgentBalance().subscribe(data => {
      this.balance = data.response;
    })
  }

}
