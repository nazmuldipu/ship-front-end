import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/service/report.service';
import { Ship } from 'src/shared/models/ship.model';
import { Report } from 'src/shared/models/report.model';

@Component({
  selector: 'app-sells-report',
  templateUrl: './sells-report.component.html',
  styleUrls: ['./sells-report.component.scss']
})
export class SellsReportComponent implements OnInit {
  dd;
  ship: Ship;
  loading = false;
  reportType = 'Reservation';
  serviceAdminSellsReportList: Report[] = [];
  total;
  soldBy: Map<string, number> = new Map<string, number>();

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    let date = new Date();
    this.dd = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }

  onShipSelect(ship: Ship) {
    this.ship = ship;
    this.onLoad();
    // this.getServiceAdminReservationReportByShipId(this.ship.id, this.dd);
  }
  onTypeChange() {
    this.onLoad();
  }
  onDateChange() {
    this.onLoad();
  }
  onPrint() {
    (window as any).print();
  }
  onLoad() {
    if (this.ship && this.ship.id != null) {
      switch (this.reportType) {
        case 'Reservation':
          this.getServiceAdminReservationReportByShipId(this.ship.id, this.dd);
          break;
        case 'Sells':
          this.getServiceAdminSellsReportByShipId(this.ship.id, this.dd);
          break;
      }
    }
  }

  async getServiceAdminReservationReportByShipId(shipId, { year, month, day }) {
    this.loading = true;
    const date = `${year}-${month}-${day}`;
    await this.reportService
      .getServiceAdminShipReservation(shipId, date)
      .subscribe(data => {
        this.serviceAdminSellsReportList = data;
        this.calculateServiceAdminBookingReportList();
        this.loading = false;
      });
  }

  async getServiceAdminSellsReportByShipId(shipId, { year, month, day }) {
    this.loading = true;
    const date = `${year}-${month}-${day}`;
    await this.reportService
      .getServiceAdminShipSells(shipId, date)
      .subscribe(data => {
        this.serviceAdminSellsReportList = data;
        this.calculateServiceAdminBookingReportList();
        this.loading = false;
        console.log(this.soldBy);
      });
  }

  calculateServiceAdminBookingReportList() {
    this.total = { totalrent: 0, totalAdvance: 0, totalDue: 0, totalSold: 0, totalUnsold: 0, totalReserved: 0 };
    this.soldBy = new Map<string, number>();
    this.serviceAdminSellsReportList.forEach(sb => {
      this.total.totalrent += sb.price;
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
    });
  }

  // async getServiceAdminSe
}
