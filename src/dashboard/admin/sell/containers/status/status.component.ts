import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/service/booking.service';
import { SeatsService } from 'src/service/seats.service';
import {
  SeatStatus,
  Booking,
  SeatStatusList
} from 'src/shared/models/booking.model';
import { Ship } from 'src/shared/models/ship.model';
import { UtilService } from 'src/service/util.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  ship: Ship;
  seatList: SeatStatusList[] = [];
  filteredSeatList: SeatStatusList[] = [];
  category: string;
  categoryList: string[] = [];
  ticket: Booking;
  shortTicket = true;
  dd;
  minDate;
  maxDate;

  constructor(
    private seastService: SeatsService,
    private bookingService: BookingService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    let date = new Date();
    this.dd = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    this.minDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate() - 1
    };
    this.maxDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 3, //Maximum 2 month from now
      day: date.getDate()
    };
  }

  onShipSelect(ship: Ship) {
    this.ship = ship;
    // this.shipId = ship.id;
    this.getAdminSeatStatus(ship.id, this.dd);
  }

  onDateChange() {
    if (this.ship.id) {
      this.getAdminSeatStatus(this.ship.id, this.dd);
    }
  }

  async getAdminSeatStatus(shipId, date) {
    try {
      this.seatList = await this.seastService
        .getAdminSeatStatusListByShiplId(shipId, this.makeDateString(date)).toPromise();
      this.categoryList = [];
      this.seatList.forEach(s => {
        const cat = s.category;
        const c = this.categoryList.find(ct => ct['name'] == cat['name']);
        if (!c) {
          this.categoryList.push(cat);
        }
      });
      this.categoryList.sort(this.utilService.dynamicSortObject('priority'));
      this.onSelectCategory(this.categoryList[this.categoryList.length - 1]);
    } catch (err) { console.log(err) }
  }
  onSelectCategory(category) {
    this.category = this.categoryList.find(ca => ca['name'] == category['name']);
    this.filterSeatList(category);
  }

  filterSeatList(category) {
    this.filteredSeatList = [];
    this.seatList.forEach(seat => {
      if (seat.category['name'] == category['name']) {
        this.filteredSeatList.push(seat);
      }
    });
  }

  onSeatClick(id: number) {
    const value: SeatStatusList = this.filteredSeatList.find(fs => fs.id == id);
    if (value.bookingId) {
      if (this.ticket == null || this.ticket.id != value.bookingId) {
        this.getAdminBooking(value.bookingId);
      }
    } else {
      this.ticket = null;
    }
  }

  async getAdminBooking(bookingId) {
    try {
      this.ticket = await this.bookingService.getAdminBooking(bookingId).toPromise();
    } catch (err) { console.log(err) }
  }

  async onCancelBooking(bookingId, status) {
    if (confirm('Are you sure to cancel booking with id : ' + bookingId)) {
      if (status == SeatStatus.SEAT_SOLD) {
        try {
          const resp = await this.bookingService.cancelAdminBooking(bookingId).toPromise();
          this.ticket = null;
          this.getAdminSeatStatus(this.ship.id, this.dd);
        } catch (err) { console.log(err) }
      } else if (status == SeatStatus.SEAT_RESERVED) {
        try {
          const resp = await this.bookingService.cancelAdminReservation(bookingId).toPromise();
          this.ticket = null;
          this.getAdminSeatStatus(this.ship.id, this.dd);
        } catch (err) { console.log(err) }
      }
    }
  }

  async onConfirmReservation(bookingId) {
    if (
      confirm('Are you sure to confirm your reservation with id : ' + bookingId)
    ) {
      console.log('confirm reservation');
      try {
        const resp = await this.bookingService.confirmAdminReservation(bookingId).toPromise();
        this.ticket = null;
        this.getAdminSeatStatus(this.ship.id, this.dd);
      } catch (err) { console.log(err); }
    }
  }

  makeDateString(date) {
    const dateString = date.year + '-' + (date.month < 10 ? '0' + date.month : date.month) + '-' + (date.day < 10 ? '0' + date.day : date.day);
    return dateString;
  }

  onTicketClose(event) {
    this.ticket = null;
  }
}
