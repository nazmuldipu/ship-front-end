import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { Report } from 'src/shared/models/report.model';
import { ReportService } from 'src/service/report.service';

@Component({
  selector: 'app-hotel-report',
  templateUrl: './hotel-report.component.html',
  styleUrls: ['./hotel-report.component.scss']
})
export class HotelReportComponent implements OnInit {
  dd;
  ship: Ship;
  loading = false;
  reportType = 'Sells';
  serviceAdminSellsReportList: Report[] = [];
  total;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    let date = new Date();
    this.dd = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
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

  onSelectShip(event) {
    this.ship = event;
    this.getAdminReservationReportByShipId(this.ship.id, this.dd);
  }

  onLoad() {
    if (this.ship && this.ship.id != null) {
      switch (this.reportType) {
        case 'Reservation':
          this.getAdminReservationReportByShipId(this.ship.id, this.dd);
          break;
        case 'Sells':
          this.getAdminSellsReportByShipId(this.ship.id, this.dd);
          break;
      }
    }
  }

  async getAdminReservationReportByShipId(shipId, { year, month, day }) {
    this.loading = true;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    const date = `${year}-${month}-${day}`;
    await this.reportService
      .getAdminReservationReportByShipId(date, shipId)
      .subscribe(data => {
        this.serviceAdminSellsReportList = data;
        this.calculateServiceAdminBookingReportList();
        this.loading = false;
      });
  }

  async getAdminSellsReportByShipId(shipId, { year, month, day }) {
    this.loading = true;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    const date = `${year}-${month}-${day}`;
    await this.reportService
      .getAdminSellsReportByShipId(date, shipId)
      .subscribe(data => {
        this.serviceAdminSellsReportList = data;
        this.calculateServiceAdminBookingReportList();
        this.loading = false;
      });
  }

  calculateServiceAdminBookingReportList() {
    this.total = { totalrent: 0, totalAdvance: 0, totalDue: 0 };
    this.serviceAdminSellsReportList.forEach(sb => {
      this.total.totalrent += sb.price;
    });
  }
}
