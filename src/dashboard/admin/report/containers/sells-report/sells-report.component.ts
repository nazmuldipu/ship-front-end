import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/service/report.service';
import { UtilService } from 'src/service/util.service';
import { Report } from 'src/shared/models/report.model';

@Component({
  selector: 'app-sells-report',
  templateUrl: './sells-report.component.html',
  styleUrls: ['./sells-report.component.scss']
})
export class SellsReportComponent implements OnInit {
  dd;
  reportHead = '';
  reportType = 'Sells';
  filterValue = 'all';
  loading = false;
  savedList: Report[] = [];
  serviceAdminSellsReportList: Report[] = [];
  total;

  constructor(
    private reportService: ReportService,
    private utilService: UtilService
  ) {}

  ngOnInit() {
    let date = new Date();
    this.dd = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    this.getAdminSellsgReport(this.dd);
  }

  onDateChange() {
    this.onLoad();
  }
  onTypeChange() {
    this.onLoad();
  }
  onFilterChange(value) {
    this.filterValue = value;
    switch (value) {
      case 'all':
        this.serviceAdminSellsReportList = this.savedList;
        break;
      case 'hotelswave':
        this.serviceAdminSellsReportList = this.savedList.filter(
          sl => sl.role === 'Admin'
        );
        break;
      case 'hotelAdmin':
        this.serviceAdminSellsReportList = this.savedList.filter(
          sl => sl.role === 'Service Admin'
        );
        break;
      case 'hotelAgent':
        this.serviceAdminSellsReportList = this.savedList.filter(
          sl => sl.role === 'Service Agent'
        );
        break;
      case 'hotelswaveAgent':
        this.serviceAdminSellsReportList = this.savedList.filter(
          sl => sl.role === 'Agent'
        );
        break;
      case 'user':
        this.serviceAdminSellsReportList = this.savedList.filter(
          sl => sl.role === 'User'
        );
        break;
      case 'superSell':
        this.serviceAdminSellsReportList = this.savedList.filter(
          sl => sl.role === 'User' || sl.role === 'Agent' || sl.role == 'Admin'
        );
        break;
    }
    this.calculateServiceAdminBookingReportList();
  }

  onLoad() {
    switch (this.reportType) {
      case 'Reservation':
        this.getAdminReservationReport(this.dd);
        break;
      case 'Sells':
        this.getAdminSellsgReport(this.dd);
        break;
    }
  }

  async getAdminReservationReport({ year, month, day }) {
    this.loading = true;
    const date = `${year}-${month}-${day}`;
    await this.reportService.getAdminReservationReport(date).subscribe(data => {
      this.savedList = data;
      this.onFilterChange(this.filterValue);
      this.reportHead = 'Reservation';
      this.loading = false;
    });
  }

  async getAdminSellsgReport({ year, month, day }) {
    this.loading = true;
    const date = `${year}-${month}-${day}`;
    await this.reportService.getAdminSellsReport(date).subscribe(data => {
      this.savedList = data;
      this.savedList.sort(this.utilService.dynamicSortObject('date'));
      this.savedList.sort(this.utilService.dynamicSortObject('roomNumber'));
      this.onFilterChange(this.filterValue);
      this.reportHead = 'Sells';
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
