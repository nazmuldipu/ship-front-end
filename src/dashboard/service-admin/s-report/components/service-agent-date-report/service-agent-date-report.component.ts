import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Report } from 'src/shared/models/report.model';

@Component({
  selector: 'service-agent-date-report',
  templateUrl: './service-agent-date-report.component.html',
  styleUrls: ['./service-agent-date-report.component.scss']
})
export class ServiceAgentDateReportComponent implements OnChanges {
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
    this.total = { totalrent: 0, totalTicket: 0, totalSeat: 0 };
    this.serviceAdminSellsReportList.forEach(sb => {
      this.total.totalrent += sb.price;
      this.total.totalTicket++;
      this.total.totalSeat += sb.seatNumbers.length;
    });
  }
}
