import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Counter } from 'src/shared/models/counter.model';
import { Report } from 'src/shared/models/report.model';

@Component({
  selector: 'report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnChanges {
  @Input() type: string;
  @Input() headLine : string;
  @Input() reportList: Report[] = [];

  soldBy: Map<string, Counter> = new Map<string, Counter>();
  total;
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.reportList && this.reportList != null){
      this.calculateServiceAdminBookingReportList();
    }
  }

  calculateServiceAdminBookingReportList() {
    this.total = { totalrent: 0, totalAdvance: 0, totalDue: 0, totalCommission: 0 };
    this.soldBy = new Map<string, Counter>();
    this.reportList.forEach(sb => {
      this.total.totalrent += sb.price;
      this.total.totalCommission += (sb.hotelswaveAgentCommission + sb.hotelswaveCommission + sb.shipAgentCommission);
      if (sb.soldBy && sb.seatNumbers) {
        const hotelswaveCommission = this.soldBy.get(sb.soldBy) == null ? sb.hotelswaveCommission : this.soldBy.get(sb.soldBy).hotelswaveCommission + sb.hotelswaveCommission;
        const hotelswaveAgentCommission = this.soldBy.get(sb.soldBy) == null ? sb.hotelswaveAgentCommission : this.soldBy.get(sb.soldBy).hotelswaveAgentCommission + sb.hotelswaveAgentCommission;
        const shipAgentCommission = this.soldBy.get(sb.soldBy) == null ? sb.shipAgentCommission : this.soldBy.get(sb.soldBy).shipAgentCommission + sb.shipAgentCommission;
        const seatNumbers = this.soldBy.get(sb.soldBy) == null ? sb.seatNumbers.length : this.soldBy.get(sb.soldBy).totalSeatNumber + sb.seatNumbers.length;
        let price = 0;
        let totalSold = 0;
        let totalReserved = 0;
        if (sb.bookingStatus == 'SEAT_SOLD') {
          totalSold = this.soldBy.get(sb.soldBy) == null ? sb.seatNumbers.length : this.soldBy.get(sb.soldBy).totalSold + sb.seatNumbers.length;
          price = this.soldBy.get(sb.soldBy) == null ? sb.price : this.soldBy.get(sb.soldBy).price + sb.price;
        }
        else {
          totalReserved = this.soldBy.get(sb.soldBy) == null ? sb.seatNumbers.length : this.soldBy.get(sb.soldBy).totalReserved + sb.seatNumbers.length;
          price = this.soldBy.get(sb.soldBy) == null ? 0 : this.soldBy.get(sb.soldBy).price;
        }

        const value: Counter = { totalSold: totalSold, totalReserved: totalReserved, price: price, hotelswaveCommission: hotelswaveCommission, hotelswaveAgentCommission: hotelswaveAgentCommission, shipAgentCommission: shipAgentCommission, totalSeatNumber: seatNumbers }
        this.soldBy.set(sb.soldBy, value);
      }
    });
  }

}
