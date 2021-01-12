import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { SeatsService } from 'src/service/seats.service';
import {
  Booking,
  SeatStatus,
  SeatStatusList
} from 'src/shared/models/booking.model';
import { BookingService } from 'src/service/booking.service';
import { UtilService } from 'src/service/util.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  dd;
  minDate;
  maxDate;
  ticket: Booking;
  ship: Ship;
  category: string;
  seatList: SeatStatusList[] = [];
  filteredSeatList: SeatStatusList[] = [];
  categoryList: string[] = [];
  shortTicket = true;

  constructor(
    private seatsService: SeatsService,
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

  onDateChange() {
    if (this.ship) {
      this.getShipSeatStatus(this.ship.id, this.dd);
    }
  }

  onShipSelect(ship: Ship) {
    this.ship = ship;
    this.getShipSeatStatus(ship.id, this.dd);
  }

  async getShipSeatStatus(shipId, date) {
    try {
      this.seatList = await this.seatsService.getServiceAdminSeatStatusListByShiplId(shipId, this.makeDateString(date)).toPromise();
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

  onSelectCategory(category: string) {
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

  makeDateString(date) {
    const dateString = date.year + '-' + (date.month < 10 ? '0' + date.month : date.month) + '-' + (date.day < 10 ? '0' + date.day : date.day);
    return dateString;
  }

  onSeatClick(id: number) {
    const value: SeatStatusList = this.filteredSeatList.find(fs => fs.id == id);
    if (value.bookingId) {
      if (this.ticket == null || this.ticket.id != value.bookingId) {
        this.getServiceAdminBooking(value.bookingId);
      }
    } else {
      this.ticket = null;
    }
  }

  async getServiceAdminBooking(bookingId) {
    try {
      this.ticket = await this.bookingService.getServiceAdminBooking(bookingId).toPromise();
    } catch (err) { console.log(err) }
  }

  async onCancelBooking(bookingId, status) {
    if (confirm('Are you sure to cancel booking with id : ' + bookingId)) {
      if (status == SeatStatus.SEAT_SOLD) {
        try {
          const resp = await this.bookingService.cancelServiceAdminBooking(bookingId).toPromise();
          this.getShipSeatStatus(this.ship.id, this.dd);
          this.ticket = null;
        } catch (err) { console.log(err) }

      } else if (status == SeatStatus.SEAT_RESERVED) {
        try {
          await this.bookingService.cancelServiceAdminReservation(bookingId).toPromise();
          this.ticket = null;
          this.getShipSeatStatus(this.ship.id, this.dd);
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
        await this.bookingService.confirmServiceAdminReservation(bookingId).toPromise();
        this.ticket = null;
        this.getShipSeatStatus(this.ship.id, this.dd);
      } catch (err) { console.log(err) }
    }
  }

  onTicketClose(event) {
    this.ticket = null;
  }
}
