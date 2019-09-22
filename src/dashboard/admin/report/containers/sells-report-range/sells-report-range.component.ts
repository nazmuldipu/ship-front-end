import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/service/report.service';
import { ReportRange } from 'src/shared/models/report-range.model';

@Component({
  selector: 'app-sells-report-range',
  templateUrl: './sells-report-range.component.html',
  styleUrls: ['./sells-report-range.component.scss']
})
export class SellsReportRangeComponent implements OnInit {
  public options: any;
  public daterange: any = {};
  reportType: string = 'Sell';
  serviceAdminSellsReportRangeList: ReportRange[] = [];
  total;
  loading = false;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.setDateRanges();
    this.onReportTypeChange(this.reportType);
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
    this.onReportTypeChange(this.reportType);
  }

  onReportTypeChange(reportType) {
    this.reportType = reportType;
    switch (this.reportType) {
      case 'Sell':
        this.getAdminSellsgReportRange(
          this.daterange.checkinDate,
          this.daterange.checkoutDate
        );
        break;
      case 'Reserve':
        this.getAdminReservationReportRange(
          this.daterange.checkinDate,
          this.daterange.checkoutDate
        );
        break;
    }
  }

  async getAdminReservationReportRange(sd: Date, ed: Date) {
    const startDate = this.getDateString(sd);
    const endDate = this.getDateString(ed);
    this.loading = true;
    await this.reportService.getAdminReservationRangeReport(startDate, endDate).subscribe(data => {
      this.serviceAdminSellsReportRangeList = data;
      this.calculateServiceAdminBookingReportList();
      this.loading = false;
    });
  }

  async getAdminSellsgReportRange(sd: Date, ed: Date) {
    let startDate = this.getDateString(sd);
    let endDate = this.getDateString(ed);
    this.loading = true;
    await this.reportService.getAdminSellsReportRange(startDate, endDate).subscribe(data => {
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
    return (
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    );
  }

  onPrint() {
    (window as any).print();
  }

}
