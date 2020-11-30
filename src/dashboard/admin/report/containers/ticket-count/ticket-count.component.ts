import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/service/report.service';
import { Ship } from 'src/shared/models/ship.model';
import { UtilService } from 'src/service/util.service';

@Component({
  selector: 'app-ticket-count',
  templateUrl: './ticket-count.component.html',
  styleUrls: ['./ticket-count.component.scss']
})
export class TicketCountComponent implements OnInit {
  public options: any;
  public daterange: any = {};
  ship: Ship;
  reportList: any;
  loading = false;
  constructor(private reportService: ReportService, private util: UtilService) { }

  ngOnInit() {
    this.setDateRanges();
  }
  // getTicketCount

  setDateRanges() {
    this.daterange.startDate = new Date();
    this.daterange.endDate = new Date();

    // const minDate = new Date();
    // minDate.setDate(this.daterange.startDate.getDate() - 90);
    const maxDate = new Date();
    maxDate.setDate(this.daterange.endDate.getDate() + 90);

    this.daterange.startDate.setDate(
      this.daterange.endDate.getDate() - 10
    );
    this.daterange.endDate.setDate(
      this.daterange.endDate.getDate()
    );

    this.options = {
      autoApply: true,
      locale: { format: 'DD MMM,YY' },
      maxDate: maxDate,
      startDate: this.daterange.startDate,
      endDate: this.daterange.endDate,
      alwaysShowCalendars: false
    };
  }

  public selectedDate(value: any) {
    this.daterange.startDate = value.start._d as Date;
    this.daterange.endDate = value.end._d as Date;
    this.daterange.label = value.label;
    if (this.ship) {
      this.getTicketCountReport(this.ship.id, this.daterange.startDate, this.daterange.endDate)
    }
  }

  onSelectShip(event: Ship) {
    this.ship = event;
    this.getTicketCountReport(event.id, this.daterange.startDate, this.daterange.endDate)
  }

  async getTicketCountReport(shipId, sd: Date, ed: Date) {
    const startDate = this.util.getDateString(sd);
    const endDate = this.util.getDateString(ed);
    this.reportList = null;
    this.loading = true;
    try {
      this.reportList = await this.reportService.getTicketCount(shipId, startDate, endDate).toPromise();
      this.loading = false;
    } catch (err) { console.log(err) }
  }

  onPrint() {
    (window as any).print();
  }
}
