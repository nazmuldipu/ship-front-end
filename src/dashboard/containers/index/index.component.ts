import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { ReportService } from 'src/service/report.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  report;
  dd;
  TotalSeat;
  TotalSold;

  chart;
  month = [];
  price = [];

  constructor(
    private router: Router,
    private auth: AuthService,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    let date = new Date();
    this.dd = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    if (this.auth.authorities.includes('ROLE_ADMIN')) {
      this.router.navigate(['/dashboard/admin/sell']);
    } else if (this.auth.authorities.includes('ROLE_SERVICE_ADMIN')) {
      this.getServiceAdminDashboardReport(this.dd);
    }
  }

  async getServiceAdminDashboardReport({ year, month, day }) {
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    const date = `${year}-${month}-${day}`;
    await this.reportService
      .getServiceAdminDashboardReport(date)
      .subscribe(data => {
        this.report = data;
        console.log(this.report);
        this.getTotal();
      });
  }

  getTotal() {
    let totalSeat = 0;
    let totalSold = 0;
    if (this.report && this.report.ships) {
      this.report.ships.forEach(ship => {
        totalSeat += ship.numberOfSeats;
        ship.categories.forEach(c => {
          totalSold += c.sells.sold;
        });
      });
    }
    this.TotalSeat = totalSeat;
    this.TotalSold = totalSold;

    this.month = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    this.price = [100, 200, 120, 190, 100, 130, 149, 180, 140, 195, 120, 125];
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.month,
        datasets: [
          {
            data: this.price,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
    console.log(this.chart);
  }
}
