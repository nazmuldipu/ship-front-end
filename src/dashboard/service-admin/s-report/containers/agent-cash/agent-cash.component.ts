import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ReportService } from 'src/service/report.service';

@Component({
  selector: 'app-agent-cash',
  templateUrl: './agent-cash.component.html',
  styleUrls: ['./agent-cash.component.scss']
})
export class AgentCashComponent implements OnInit {
  dd: NgbDateStruct;
  maxDate: NgbDateStruct;

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
    console.log("getAdminAgentCash", this.dd, { year, month, day });
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    const date = `${year}-${month}-${day}`;
    try {
      const resp = await this.reportService.getServiceAdminAgentCashReport(date).toPromise();
      console.log(resp);
    } catch (err) { console.log(err) }
  }

  onDateChange() {
    console.log("onDateChange", this.dd);
  }

}
