import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/service/booking.service';
import { SeatsService } from 'src/service/seats.service';
import { SeatStatus, Booking } from 'src/shared/models/booking.model';
import { Ship } from 'src/shared/models/ship.model';

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
    await this.seastService
      .getAdminSeatStatusListByShiplId(shipId, this.makeDateString(date))
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
    await this.bookingService.getAdminBooking(bookingId).subscribe(data => {
      this.ticket = data;
    });
  }

  onCancelBooking(bookingId, status) {
    if (confirm('Are you sure to cancel booking with id : ' + bookingId)) {
      if (status == SeatStatus.SEAT_SOLD) {
        this.bookingService.cancelAdminBooking(bookingId).subscribe(data => {
          this.ticket = null;
          this.getAdminSeatStatus(this.ship.id, this.dd);
        });
      } else if (status == SeatStatus.SEAT_RESERVED) {
        this.bookingService
          .cancelAdminReservation(bookingId)
          .subscribe(data => {
            this.ticket = null;
            this.getAdminSeatStatus(this.ship.id, this.dd);
          });
      }
    }
  }

  onConfirmReservation(bookingId) {
    if (
      confirm('Are you sure to confirm your reservation with id : ' + bookingId)
    ) {
      console.log('confirm reservation');
      this.bookingService.confirmAdminReservation(bookingId).subscribe(data => {
        this.ticket = null;
        this.getAdminSeatStatus(this.ship.id, this.dd);
      });
    }
  }

  makeDateString(date) {
    const dateString = date.year + '-' + date.month + '-' + date.day;
    return dateString;
  }

  onTicketClose(event) {
    this.ticket = null;
  }
}

export interface SeatStatusList {
  id: number;
  seatNumber: string;
  category: string;
  bookingId: number;
  status: SeatStatus;
}
