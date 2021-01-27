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
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    const date = `${year}-${month}-${day}`;
    try {
      this.loading = true;
      this.serviceAdminSellsReportList = await this.reportService.getAdminReservationReportByShipId(date, shipId).toPromise();
      this.calculateServiceAdminBookingReportList();
      this.loading = false;
    } catch (err) { console.log(err) }
  }

  async getAdminSellsReportByShipId(shipId, { year, month, day }) {
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    const date = `${year}-${month}-${day}`;
    try {
      this.loading = true;
      this.serviceAdminSellsReportList = await this.reportService.getAdminSellsReportByShipId(date, shipId).toPromise();
      this.calculateServiceAdminBookingReportList();
      this.loading = false;
    } catch (err) { console.log(err) }
  }

  calculateServiceAdminBookingReportList() {
    this.total = { totalrent: 0, totalAdvance: 0, totalDue: 0 };
    this.serviceAdminSellsReportList.forEach(sb => {
      this.total.totalrent += sb.price;
    });
  }
}
