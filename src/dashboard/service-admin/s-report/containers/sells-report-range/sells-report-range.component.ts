import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/service/report.service';
import { ReportRange } from 'src/shared/models/report-range.model';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-sells-report-range',
  templateUrl: './sells-report-range.component.html',
  styleUrls: ['./sells-report-range.component.scss']
})
export class SellsReportRangeComponent implements OnInit {
  total;
  loading = false;
  public options: any;
  public daterange: any = {};
  reportType: string = 'Sell';
  ship: Ship;
  serviceAdminSellsReportRangeList: ReportRange[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.setDateRanges();
  }

  onPrint() {
    (window as any).print();
  }

  setDateRanges() {
    this.daterange.checkoutDate = new Date();
    this.daterange.checkinDate = new Date();

    const minDate = new Date();
    minDate.setDate(this.daterange.checkinDate.getDate() - 90);
    const maxDate = new Date();
    maxDate.setDate(this.daterange.checkinDate.getDate() + 12);

    this.daterange.checkinDate.setDate(
      this.daterange.checkinDate.getDate() - 10
    );

    this.options = {
      autoApply: true,
      locale: { format: 'DD MMM,YY' },
      minDate: minDate,
      maxDate: maxDate,
      startDate: this.daterange.checkinDate,
      endDate: this.daterange.checkoutDate,
      alwaysShowCalendars: false
    };
  }

  public selectedDate(value: any) {
    this.daterange.checkinDate = value.start._d as Date;
    this.daterange.checkoutDate = value.end._d as Date;
    this.daterange.label = value.label;
    if (this.ship) {
      this.onReportTypeChange(this.ship.id, this.reportType);
    }
  }

  onShipSelect(ship: Ship) {
    this.ship = ship;
    this.onReportTypeChange(ship.id, this.reportType);
    // this.getServiceAdminReservationReportByShipId(this.ship.id, this.dd);
  }

  onReportTypeChange(shipId, reportType) {
    this.reportType = reportType;
    switch (this.reportType) {
      case 'Sell':
        this.getServiceAdminShipSellsRange(shipId, this.daterange.checkinDate, this.daterange.checkoutDate);
        break;
      case 'Reserve':
        this.getServiceAdminReservationReportRange(shipId, this.daterange.checkinDate, this.daterange.checkoutDate);
        break;
    }
  }

  async getServiceAdminReservationReportRange(shipId, sd: Date, ed: Date) {
    const startDate = this.getDateString(sd);
    const endDate = this.getDateString(ed);
    this.loading = true;
    await this.reportService.getServiceAdminShipReservationRange(shipId, startDate, endDate).subscribe(data => {
      this.serviceAdminSellsReportRangeList = data;
      this.calculateServiceAdminBookingReportList();
      this.loading = false;
    });
  }

  async getServiceAdminShipSellsRange(shipId, sd: Date, ed: Date) {
    let startDate = this.getDateString(sd);
    let endDate = this.getDateString(ed);
    this.loading = true;
    await this.reportService.getServiceAdminShipSellsRange(shipId, startDate, endDate).subscribe(data => {
      this.serviceAdminSellsReportRangeList = data;
      this.calculateServiceAdminBookingReportList();
      this.loading = false;
    });
  }

  calculateServiceAdminBookingReportList() {
    this.total = 0;
    this.serviceAdminSellsReportRangeList.forEach(sb => {
      this.total += sb.totalFare;
    });
  }

  getDateString(date: Date): string {
    const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return (
      date.getFullYear() + '-' + month + '-' + day
    );
  }

}
