import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/service/booking.service';
import { ReportService } from 'src/service/report.service';
import { Ship } from 'src/shared/models/ship.model';
import { Report } from 'src/shared/models/report.model';

@Component({
  selector: 'app-booking-report-list',
  templateUrl: './booking-report-list.component.html',
  styleUrls: ['./booking-report-list.component.scss']
})
export class BookingReportListComponent implements OnInit {
  dd;
  total;
  ship: Ship;
  serviceAdminSellsReportList: Report[] = [];
  soldBy: Map<string, number> = new Map<string, number>();
  loading = false;


  constructor(private reportService: ReportService) { }

  ngOnInit() {
    let date = new Date();
    this.dd = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }

  async getServiceAdminBooking(shipId, { year, month, day }) {
    this.loading = true;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    const date = `${year}-${month}-${day}`;
    try {
      this.serviceAdminSellsReportList = await this.reportService.getServiceAdminBooking(shipId, date).toPromise();
      this.calculateServiceAdminBookingReportList();
      this.loading = false;
    } catch (err) { console.log(err) }
  }

  onShipSelect(ship: Ship) {
    this.ship = ship;
    this.getServiceAdminBooking(ship.id, this.dd);
  }

  onDateChange() {
    this.getServiceAdminBooking(this.ship.id, this.dd);
  }

  onPrint() {
    (window as any).print();
  }

  calculateServiceAdminBookingReportList() {
    this.total = { totalrent: 0, totalAdvance: 0, totalDue: 0, totalSold: 0, totalUnsold: 0, totalReserved: 0, totalDuplicate: 0 };
    this.soldBy = new Map<string, number>();
    let roomids: string[] = [];
    this.serviceAdminSellsReportList.forEach(sb => {
      this.total.totalrent += sb.price;
      sb.seatNumbers.forEach(sn => {
        if (roomids.includes(sn)) {
          sb.duplicate = true;
          this.total.totalDuplicate += 1;
        } else {
          roomids.push(sn);
        }
      });

      if (sb.seatNumbers) {
        switch (sb.bookingStatus) {
          case 'SEAT_SOLD':
            this.total.totalSold += sb.seatNumbers.length;
            break;
          case null:
            this.total.totalUnsold += sb.seatNumbers.length;
            break;
          case 'SEAT_RESERVED':
            this.total.totalReserved += sb.seatNumbers.length;
            break;
        }
        if (sb.soldBy) {
          this.soldBy.set(sb.soldBy, this.soldBy.get(sb.soldBy) ? this.soldBy.get(sb.soldBy) + sb.seatNumbers.length : sb.seatNumbers.length);
        }
      }

    });

    this.serviceAdminSellsReportList.sort((a, b) => a.seatNumbers[0].localeCompare(b.seatNumbers[0]));
    // products.sort((a,b)=>a.title.rendered > b.title.rendered)
  }

}
