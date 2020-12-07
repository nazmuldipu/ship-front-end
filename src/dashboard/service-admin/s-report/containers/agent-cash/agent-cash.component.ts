import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ReportService } from 'src/service/report.service';
import { ShipAdminCashbook } from 'src/shared/models/ship-admin-cashbook.model';

@Component({
  selector: 'app-agent-cash',
  templateUrl: './agent-cash.component.html',
  styleUrls: ['./agent-cash.component.scss']
})
export class AgentCashComponent implements OnInit {
  dd: NgbDateStruct;
  maxDate: NgbDateStruct;
  shipAdminCashbook: ShipAdminCashbook[] = []
  total = 0;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    let date = new Date();
    this.dd = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    this.maxDate = { ...this.dd };
    this.getAdminAgentCash(this.dd);
  }

  async getAdminAgentCash({ year, month, day }) {
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    const date = `${year}-${month}-${day}`;
    try {
      const resp = await this.reportService.getServiceAdminAgentCashReport(date).toPromise();
      this.shipAdminCashbook = resp;
      let total = 0
      this.shipAdminCashbook.forEach(sac =>{
        total += sac.debit;
      })
      this.total = total;
    } catch (err) { console.log(err) }
  }

  onDateChange() {
    console.log("onDateChange", this.dd);
  }

}
