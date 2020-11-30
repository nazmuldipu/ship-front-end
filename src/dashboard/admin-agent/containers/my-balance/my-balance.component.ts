import { Component, OnInit } from '@angular/core';
import { AccountingService } from 'src/service/accounting.service';

@Component({
  selector: 'app-my-balance',
  templateUrl: './my-balance.component.html',
  styleUrls: ['./my-balance.component.scss']
})
export class MyBalanceComponent implements OnInit {
  balance;
  constructor(private accountingService: AccountingService) { }

  ngOnInit() {
    this.getMyBalance();
  }

  async getMyBalance() {
    try {
      const resp = await this.accountingService.getAdminAgentBalance().toPromise();
      this.balance = resp['response'];
    } catch (err) { console.log(err) }
  }
}
