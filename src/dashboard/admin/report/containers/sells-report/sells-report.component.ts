import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/service/report.service';
import { UtilService } from 'src/service/util.service';
import { Report } from 'src/shared/models/report.model';
import { CounterReportComponent } from '../../../../service-admin/s-report/containers/counter-report/counter-report.component';

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
  soldBy: Map<string, Counter> = new Map<string, Counter>();
  total;

  constructor(
    private reportService: ReportService,
    private utilService: UtilService
  ) { }

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

  onPrint() {
    (window as any).print();
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
      case 'shipAdmin':
        this.serviceAdminSellsReportList = this.savedList.filter(
          sl => sl.role === 'Service Admin'
        );
        break;
      case 'shipAgentr':
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
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
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
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

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
    this.total = { totalrent: 0, totalAdvance: 0, totalDue: 0, totalCommission: 0 };
    this.soldBy = new Map<string, Counter>();
    this.serviceAdminSellsReportList.forEach(sb => {
      this.total.totalrent += sb.price;
      this.total.totalCommission += (sb.hotelswaveAgentCommission + sb.hotelswaveCommission + sb.shipAgentCommission);
      if (sb.soldBy) {
        const hotelswaveCommission = this.soldBy.get(sb.soldBy) == null ? sb.hotelswaveCommission : this.soldBy.get(sb.soldBy).hotelswaveCommission + sb.hotelswaveCommission;
        const hotelswaveAgentCommission = this.soldBy.get(sb.soldBy) == null ? sb.hotelswaveAgentCommission : this.soldBy.get(sb.soldBy).hotelswaveAgentCommission + sb.hotelswaveAgentCommission;
        const shipAgentCommission = this.soldBy.get(sb.soldBy) == null ? sb.shipAgentCommission : this.soldBy.get(sb.soldBy).shipAgentCommission + sb.shipAgentCommission;
        const seatNumbers = this.soldBy.get(sb.soldBy) == null ? sb.seatNumbers.length : this.soldBy.get(sb.soldBy).totalSeatNumber + sb.seatNumbers.length;

        const value: Counter = { hotelswaveCommission: hotelswaveCommission, hotelswaveAgentCommission: hotelswaveAgentCommission, shipAgentCommission: shipAgentCommission, totalSeatNumber: seatNumbers }
        this.soldBy.set(sb.soldBy, value);
      }
    });
  }
}
interface Counter {
  hotelswaveCommission: number;
  hotelswaveAgentCommission: number;
  shipAgentCommission: number;
  totalSeatNumber: number;
}