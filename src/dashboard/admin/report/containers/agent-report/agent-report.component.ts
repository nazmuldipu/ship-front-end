import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { UserPage, User } from 'src/shared/models/user.model';
import { Ship } from 'src/shared/models/ship.model';
import { ReportService } from 'src/service/report.service';
import { Report } from 'src/shared/models/report.model';

@Component({
  selector: 'app-agent-report',
  templateUrl: './agent-report.component.html',
  styleUrls: ['./agent-report.component.scss']
})
export class AgentReportComponent implements OnInit {
  dd;
  total;
  user: User;
  ship: Ship;
  userPage: UserPage;
  serviceAdminSellsReportList: Report[] = [];
  loading = false;
  showShipList = false;

  constructor(private reportService: ReportService, private userService: UserService) { }

  ngOnInit() {
    let date = new Date();
    this.dd = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    this.getAdminAgentPage();
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
    if (this.user && this.ship) {
      this.getAdminReservationReport(this.ship.id, this.user.id, this.dd);
    }
  }

  onDateChange() {
    if (this.user && this.ship) {
      this.getAdminReservationReport(this.ship.id, this.user.id, this.dd);
    }
  }

  async getAdminReservationReport(shipId, userId, { year, month, day }) {
    this.loading = true;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    const date = `${year}-${month}-${day}`;
    await this.reportService.getAdminAgentReport(shipId, userId, date).subscribe(data => {
      console.log(data);
      this.serviceAdminSellsReportList = data;
      this.calculateServiceAdminBookingReportList();
      this.loading = false;
    })
  }

  calculateServiceAdminBookingReportList() {
    this.total = { totalrent: 0, totalAdvance: 0, totalDue: 0 };
    this.serviceAdminSellsReportList.forEach(sb => {
      this.total.totalrent += sb.price;
    });
  }
}
