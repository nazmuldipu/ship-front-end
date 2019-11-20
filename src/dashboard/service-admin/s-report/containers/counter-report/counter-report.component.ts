import { Component, OnInit } from "@angular/core";
import { Ship } from "src/shared/models/ship.model";
import { ReportService } from "src/service/report.service";
import { Report } from "src/shared/models/report.model";

@Component({
  selector: "app-counter-report",
  templateUrl: "./counter-report.component.html",
  styleUrls: ["./counter-report.component.scss"]
})
export class CounterReportComponent implements OnInit {
  dd: any;
  loading = false;
  ship: Ship;
  reportList: Report[] = [];
  sumReportList: Report[] = [];
  total: any;
  soldBy: Map<string, number> = new Map<string, number>();

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    let date = new Date();
    this.dd = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }

  onShipSelect(ship: Ship) {
    this.ship = ship;
    this.onDateChange();
    // this.getServiceAdminReservationReportByShipId(this.ship.id, this.dd);
  }

  onDateChange() {
    this.getServiceAdminReservationReportByShipId(this.ship.id, this.dd);
  }

  async getServiceAdminReservationReportByShipId(shipId, { year, month, day }) {
    this.loading = true;
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    const date = `${year}-${month}-${day}`;
    await this.reportService
      .getServiceAdminShipReservation(shipId, date)
      .subscribe(data => {
        this.reportList = data;
        this.calculateServiceAdminBookingReportList();
        this.loading = false;
      });
  }

  calculateServiceAdminBookingReportList() {
    this.total = {
      totalrent: 0,
      totalAdvance: 0,
      totalDue: 0,
      totalSold: 0,
      totalUnsold: 0,
      totalReserved: 0
    };
    this.soldBy = new Map<string, number>();
    this.sumReportList = [];
    this.reportList.forEach(sb => {
      //count counter bookings
      const value = this.sumReportList.find(srl => srl.bookingId == sb.bookingId);
      if (value && value.bookingId) {
        sb.seatNumbers.forEach(sn => {
          value.seatNumbers.push(sn)
        })
        this.sumReportList.splice(this.sumReportList.findIndex(sbb => sbb.bookingId == sb.bookingId), 1, value);
      } else if (sb.bookingId != null) {
        this.sumReportList.push(sb);
      }

      this.total.totalrent += sb.price; //calculate total Price
      if (sb.seatNumbers) { //if booking contain any seat
        switch (sb.bookingStatus) { //distinc count sold, reserved and unsold seat
          case "SEAT_SOLD":
            this.total.totalSold += sb.seatNumbers.length;
            break;
          case null:
            this.total.totalUnsold += sb.seatNumbers.length;
            break;
          case "SEAT_RESERVED":
            this.total.totalReserved += sb.seatNumbers.length;
            break;
        }
        if (sb.soldBy) { // count counter ticket
          this.soldBy.set(
            sb.soldBy,
            this.soldBy.get(sb.soldBy)
              ? this.soldBy.get(sb.soldBy) + sb.seatNumbers.length
              : sb.seatNumbers.length
          );
        }
      }
    });
  }

  onPrint() {
    (window as any).print();
  }
}
