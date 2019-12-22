import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { UserPage, User } from 'src/shared/models/user.model';
import { Ship } from 'src/shared/models/ship.model';
import { ReportService } from 'src/service/report.service';
import { Report } from 'src/shared/models/report.model';
import { ReportRange } from 'src/shared/models/report-range.model';

@Component({
  selector: 'app-agent-report',
  templateUrl: './agent-report.component.html',
  styleUrls: ['./agent-report.component.scss']
})
export class AgentReportComponent implements OnInit {
  activeTab = "dateReport";
  public options: any;
  public daterange: any = {};
  dd;

  user: User;
  ship: Ship;
  userPage: UserPage;
  serviceAdminSellsReportList: Report[];
  serviceAdminSellsReportRangeList: ReportRange[] = [];
  loading = false;
  showShipList = false;
  short = true;

  constructor(private reportService: ReportService, private userService: UserService) { }

  ngOnInit() {
    this.setDateRanges()

    this.getAdminAgentPage();
  }

  setDateRanges() {
    //For single date
    let date = new Date();
    this.dd = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };

    //For Date range
    this.daterange.startDate = new Date();
    this.daterange.endDate = new Date();

    const minDate = new Date();
    minDate.setDate(this.daterange.startDate.getDate() - 90);
    const maxDate = new Date();
    maxDate.setDate(this.daterange.endDate.getDate() + 2);

    this.daterange.startDate.setDate(
      this.daterange.endDate.getDate() - 10
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

  onTabChange(event) {
    this.activeTab = event.nextId
    this.onLoad()
  }

  async getAdminAgentPage(page: number = 0) {
    this.userService.getAdminAgents(page).subscribe(data => {
      this.userPage = data;
    });
  }

  onSelectAgent(id) {
    this.user = this.userPage.content.find(u => u.id == id);
    this.showShipList = true;
  }

  onBackToAgentList() {
    this.showShipList = false;
  }

  onSelectShip(ship) {
    this.ship = ship;
    this.onLoad()
  }

  onDateChange() {
    this.onLoad();
  }

  onDateRangeChange(value: any) {
    this.daterange.startDate = value.start._d as Date;
    this.daterange.endDate = value.end._d as Date;
    this.daterange.label = value.label;

    this.onLoad();
  }

  onLoad() {
    switch (this.activeTab) {
      case 'dateReport':
        if (this.user && this.ship) {
          this.getAdminSellsReport(this.ship.id, this.user.id, this.dd);
        }
        break;
      case 'dateRangeReport':
        if (this.user && this.ship) {
          this.getAdminSellsRangeReport(this.ship.id, this.user.id, this.daterange.startDate,
            this.daterange.endDate);
        }
        break;
    }
  }

  async getAdminSellsReport(shipId, userId, { year, month, day }) {
    this.loading = true;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    const date = `${year}-${month}-${day}`;
    await this.reportService.getAdminAgentReport(shipId, userId, date).subscribe(data => {
      this.serviceAdminSellsReportList = data;
      this.loading = false;
    })
  }

  async getAdminSellsRangeReport(shipId, userId, sd: Date, ed: Date) {
    const startDate = this.getDateString(sd);
    const endDate = this.getDateString(ed);
    await this.reportService.getAdminAgentReportRange(shipId, userId, startDate, endDate).subscribe(data => {
      this.serviceAdminSellsReportRangeList = data;
    })
  }

  getDateString(date: Date): string {
    const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return (
      date.getFullYear() + '-' + month + '-' + day
    );
  }

}
