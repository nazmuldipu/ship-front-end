import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/models/user.model';
import { Ship } from 'src/shared/models/ship.model';
import { Counter } from 'src/shared/models/counter.model';
import { Report } from 'src/shared/models/report.model';
import { UserService } from 'src/service/user.service';
import { UtilService } from 'src/service/util.service';
import { ShipService } from 'src/service/ship.service';
import { ReportService } from 'src/service/report.service';

@Component({
  selector: 'app-individual-report',
  templateUrl: './individual-report.component.html',
  styleUrls: ['./individual-report.component.scss']
})
export class IndividualReportComponent implements OnInit {
  public options: any;
  public daterange: any = {};
  reportType = 'Sells';
  counterType;
  counter: User;
  userList: User[];
  ship: Ship;
  shipList: Ship[];
  loading = false;
  total;

  reportList: Report[];
  soldBy: Map<string, Counter> = new Map<string, Counter>();

  constructor(private userService: UserService, private reportService: ReportService,
    private util: UtilService, private shipService: ShipService) { }

  ngOnInit() {
    this.getAllShip();
    this.setDateRanges();
  }

  setDateRanges() {
    this.daterange.startDate = new Date();
    this.daterange.endDate = new Date();

    const minDate = new Date();
    minDate.setDate(this.daterange.startDate.getDate() - 190);
    const maxDate = new Date();
    maxDate.setDate(this.daterange.endDate.getDate() + 190);

    this.daterange.startDate.setDate(
      this.daterange.endDate.getDate() - 10
    );
    this.daterange.endDate.setDate(
      this.daterange.endDate.getDate() + 10
    );

    this.options = {
      autoApply: true,
      locale: { format: 'DD MMM,YY' },
      minDate: minDate,
      maxDate: maxDate,
      startDate: this.daterange.startDate,
      endDate: this.daterange.endDate,
      alwaysShowCalendars: false
    };
  }

  public selectedDate(value: any) {
    this.reportList = null;
    this.daterange.startDate = value.start._d as Date;
    this.daterange.endDate = value.end._d as Date;
    this.daterange.label = value.label;
  }

  onPrint() {
    (window as any).print();
  }

  async getAllShip(page: number = 0) {
    this.loading = true;
    try {
      const resp = await this.shipService.getAllShip(page).toPromise();
      this.shipList = resp.content;
      this.shipList.sort(this.util.dynamicSortObject('priority'));
      this.loading = false;
    } catch (err) { console.log(err) }
  }

  async getServiceAdminUserByRole(role: string) {
    this.reportList = null;
    this.loading = true;
    try {
      this.userList = await this.userService.getServiceAdminUserByRole(role).toPromise();
      this.userList.sort(this.util.dynamicSortObject('name'));
      this.loading = false;
    } catch (err) { console.log(err) }
  }

  onCounterChange(id) {
    this.reportList = null;
    this.counter = this.userList.find(u => u.id == id);
  }

  onShipChange(id) {
    this.reportList = null;
    this.ship = this.shipList.find(sh => sh.id == id);
  }

  onSearch() {
    switch (this.reportType) {
      case 'Sells':
        this.getServiceAdminSellsRangeReport(this.ship.id, this.counter.id, this.daterange.startDate, this.daterange.endDate);
        break;
      case 'Reservation':
        this.getServiceAdminReservationRangeReport(this.ship.id, this.counter.id, this.daterange.startDate, this.daterange.endDate);
        break;
    }

  }

  async getServiceAdminSellsRangeReport(shipId, userId, sd: Date, ed: Date) {
    this.loading = true;
    const startDate = this.util.getDateString(sd);
    const endDate = this.util.getDateString(ed);
    try {
      this.reportList = await this.reportService.getServiceAdminSellsReportRangeForIndividual(shipId, userId, startDate, endDate).toPromise();
      this.calculateServiceAdminBookingReportList();
      this.loading = false;
    } catch (err) { console.log(err) }
  }

  async getServiceAdminReservationRangeReport(shipId, userId, sd: Date, ed: Date) {
    this.loading = true;
    const startDate = this.util.getDateString(sd);
    const endDate = this.util.getDateString(ed);
    try {
      this.reportList = await this.reportService.getServiceAdminReserveReportRangeForIndividual(shipId, userId, startDate, endDate).toPromise();
      this.calculateServiceAdminBookingReportList();
      this.loading = false;
    } catch (err) { console.log(err) }
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

        const value: Counter = { hotelswaveCommission: hotelswaveCommission, hotelswaveAgentCommission: hotelswaveAgentCommission, shipAgentCommission: shipAgentCommission, totalSeatNumber: seatNumbers }
        this.soldBy.set(sb.soldBy, value);
      }

    });
  }

  clear() {
    this.reportList = null;
  }

}
