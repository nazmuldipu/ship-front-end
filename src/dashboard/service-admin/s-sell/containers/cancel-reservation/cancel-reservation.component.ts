import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/service/booking.service';
import { SeatsService } from 'src/service/seats.service';
import { Ship } from 'src/shared/models/ship.model';
import { SeatStatusList } from 'src/shared/models/booking.model';

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.scss']
})
export class CancelReservationComponent implements OnInit {
  dd;
  minDate;
  maxDate;
  ship: Ship;
  seatList: SeatStatusList[] = [];
  filteredSeatList: SeatStatusList[] = [];
  category: string;
  categoryList: string[] = [];
  reservationDetails;

  constructor(
    private seatsService: SeatsService,
    private bookingService: BookingService
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
    const dateString = date.year + '-' + (date.month < 10 ? '0' + date.month : date.month) + '-' + (date.day < 10 ? '0' + date.day : date.day);
    return dateString;
  }

  onSeatClick(id: number) {
    const value: SeatStatusList = this.filteredSeatList.find(fs => fs.id == id);
    if (value.status == 'SEAT_RESERVED' || value.status == 'SEAT_SOLD') {
      if (this.reservationDetails && this.reservationDetails.bookingId == value.bookingId) {
        if (!this.reservationDetails.seatIds.includes(value.id)) {
          this.reservationDetails.seatIds.push(value.id);
          this.reservationDetails.seatNumbers.push(value.seatNumber);
        } else {
          this.reservationDetails.seatIds.splice(this.reservationDetails.seatIds.findIndex(s => s == value.id), 1);
          this.reservationDetails.seatNumbers.splice(this.reservationDetails.seatNumbers.findIndex(s => s == value.seatNumber), 1);
        }
      } else {
        this.reservationDetails = { bookingId: value.bookingId, seatIds: [value.id], seatNumbers: [value.seatNumber], date: this.makeDateString(this.dd), status: value.status }
      }

    } else {
      this.onClear();
    }
  }

  onClear() {
    this.reservationDetails = null;
  }

  onCancel(seatIds: number[], bookingId, seatNumber) {
    if (this.reservationDetails) {
      if (confirm('Are you sure to clear reservation for seat number : ' + seatNumber)) {
        if (this.reservationDetails.status == "SEAT_RESERVED") {
          this.bookingService.cancelServiceAdminReservationSeats(seatIds, bookingId).subscribe(data => {
            this.onClear();
            this.onDateChange();
          });
        } else if (this.reservationDetails.status == "SEAT_SOLD") {
          this.bookingService.cancelServiceAdminBookingSeats(seatIds, bookingId).subscribe(data => {
            this.onClear();
            this.onDateChange();
          });
        }
      }
    }
  }
}
