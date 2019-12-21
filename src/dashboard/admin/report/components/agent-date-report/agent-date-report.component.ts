import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { UserPage } from 'src/shared/models/user.model';
import { Report } from 'src/shared/models/report.model';

@Component({
  selector: 'agent-date-report',
  templateUrl: './agent-date-report.component.html',
  styleUrls: ['./agent-date-report.component.scss']
})
export class AgentDateReportComponent implements OnChanges {
  @Input() serviceAdminSellsReportList: Report[];

  dd;
  total;
  showShipList = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.serviceAdminSellsReportList) {
      this.calculateServiceAdminBookingReportList();
    }
  }

  calculateServiceAdminBookingReportList() {
    this.total = { totalrent: 0, totalAdvance: 0, totalDue: 0 };
    this.serviceAdminSellsReportList.forEach(sb => {
      this.total.totalrent += sb.price;
    });
  }


}
