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

  constructor(private reportService: ReportService) {}

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
      });
  }

  calculateServiceAdminBookingReportList() {
    this.total = { totalrent: 0, totalAdvance: 0, totalDue: 0 };
    this.serviceAdminSellsReportList.forEach(sb => {
      this.total.totalrent += sb.price;
    });
  }

  // async getServiceAdminSe
}
