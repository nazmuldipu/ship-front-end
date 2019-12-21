import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ReportRange } from 'src/shared/models/report-range.model';

@Component({
  selector: 'agent-date-report-range',
  templateUrl: './agent-date-report-range.component.html',
  styleUrls: ['./agent-date-report-range.component.scss']
})
export class AgentDateReportRangeComponent implements OnChanges {
  @Input() serviceAdminSellsReportRangeList: ReportRange[];
  total;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.serviceAdminSellsReportRangeList) {
      this.calculateServiceAdminBookingReportList();
    }
  }

  calculateServiceAdminBookingReportList() {
    this.total = 0;
    this.serviceAdminSellsReportRangeList.forEach(sb => {
      this.total += sb.totalFare;
    });
  }
}
