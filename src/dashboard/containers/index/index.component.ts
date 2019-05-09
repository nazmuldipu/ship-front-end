import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { ReportService } from 'src/service/report.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  report;
  dd;

  constructor(
    private router: Router,
    private auth: AuthService,
    private reportService: ReportService
  ) {}

  ngOnInit() {
    let date = new Date();
    this.dd = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };

    console.log(this.auth.authorities);
    if (this.auth.authorities.includes('ROLE_ADMIN')) {
      this.router.navigate(['/dashboard/admin/sell']);
    } else if (this.auth.authorities.includes('ROLE_SERVICE_ADMIN')) {
      this.getServiceAdminDashboardReport(this.dd);
    }
  }

  async getServiceAdminDashboardReport({ year, month, day }) {
    const date = `${year}-${month}-${day}`;
    await this.reportService
      .getServiceAdminDashboardReport(date)
      .subscribe(data => {
        this.report = data;
        console.log(this.report);
      });
  }

  getTotalSeat() {
    let total = 0;
    if (this.report && this.report.ships) {
      this.report.ships.forEach(element => {
        console.log(element.numberOfSeats);
        total += element.numberOfSeats;
      });
      return total;
    }
    return 0;
  }

  getTotalSold() {
    let totalSold = 0;
    if (this.report && this.report.ships) {
      this.report.ships.forEach(ship => {
        ship.categories.forEach(c => {
          console.log('Sold', c.sells.sold);
          totalSold += c.sells.sold;
        });
      });
    }
    return totalSold;
  }
}

// export interface ServiceAdminReport {
//   numberOfShips: number;
//   ships: ShipsReport;
// }

// export interface ShipsReport {
//   name: string;
//   shipNumber: string;
// }
