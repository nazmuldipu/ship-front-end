import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { SeatsService } from 'src/service/seats.service';
import {
  Booking,
  SeatStatus,
  SeatStatusList
} from 'src/shared/models/booking.model';
import { BookingService } from 'src/service/booking.service';

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
    private bookingService: BookingService
  ) {}

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
      month: date.getMonth() + 2, //Maximum 1 month from now
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
    await this.seatsService
      .getServiceAdminSeatStatusListByShiplId(shipId, this.makeDateString(date))
      .subscribe(data => {
        this.seatList = data;
        this.categoryList = [];
        this.seatList.forEach(s => {
          const cat = s.category;
          const c = this.categoryList.find(ct => ct == cat);
          if (!c) {
            this.categoryList.push(cat);
          }
        });
        this.onSelectCategory(this.categoryList[this.categoryList.length - 1]);
      });
  }

  onSelectCategory(category: string) {
    this.category = this.categoryList.find(ca => ca == category);
    this.filterSeatList(category);
  }

  filterSeatList(category) {
    this.filteredSeatList = [];
    this.seatList.forEach(seat => {
      if (seat.category == category) {
        this.filteredSeatList.push(seat);
      }
    });
  }

  makeDateString(date) {
    const dateString = date.year + '-' + date.month + '-' + date.day;
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
    await this.bookingService
      .getServiceAdminBooking(bookingId)
      .subscribe(data => {
        this.ticket = data;
      });
  }

  onCancelBooking(bookingId, status) {
    if (confirm('Are you sure to cancel booking with id : ' + bookingId)) {
      if (status == SeatStatus.SEAT_SOLD) {
        this.bookingService
          .cancelServiceAdminBooking(bookingId)
          .subscribe(data => {
            this.ticket = null;
            this.getShipSeatStatus(this.ship.id, this.dd);
          });
      } else if (status == SeatStatus.SEAT_RESERVED) {
        this.bookingService
          .cancelServiceAdminReservation(bookingId)
          .subscribe(data => {
            this.ticket = null;
            this.getShipSeatStatus(this.ship.id, this.dd);
          });
      }
    }
  }

  onConfirmReservation(bookingId) {
    if (
      confirm('Are you sure to confirm your reservation with id : ' + bookingId)
    ) {
      console.log('confirm reservation');
      this.bookingService
        .confirmServiceAdminReservation(bookingId)
        .subscribe(data => {
          this.ticket = null;
          this.getShipSeatStatus(this.ship.id, this.dd);
        });
    }
  }

  onTicketClose(event) {
    this.ticket = null;
  }
}
