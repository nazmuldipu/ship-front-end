import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/service/ship.service';
import { ShipPage } from 'src/shared/models/ship.model';
import {
  Booking,
  SubBooking,
  SeatStatus
} from 'src/shared/models/booking.model';
import { Seat } from 'src/shared/models/seat.model';
import { SeatsService } from 'src/service/seats.service';
import { Category } from 'src/shared/models/category.model';
import { User } from 'src/shared/models/user.model';
import { BookingService } from 'src/service/booking.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  shipPage: ShipPage;
  category: Category;
  categoryList: Category[] = [];
  ticket: Booking;

  detailsId;
  seatList: Seat[];
  selectedSeat: Seat[] = [];
  filteredSeatList: Seat[];

  message = '';
  dd;
  minDate;
  maxDate;
  dataSending;
  mode = 'SEAT_SOLD';

  seatLoading = false;

  constructor(
    private shipService: ShipService,
    private seatService: SeatsService,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.initiateDate();
    this.getAdminAgentShips();
  }

  initiateDate() {
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
    if (this.maxDate.month > 12) {
      this.maxDate.year += 1;
      this.maxDate.month -= 12;
    }
  }
  adjustDay(day) {
    let date = new Date(this.dd.year, this.dd.month - 1, this.dd.day + day);
    const value = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    let minDate = new Date(
      this.minDate.year,
      this.minDate.month - 1,
      this.minDate.day
    );
    let maxDate = new Date(
      this.maxDate.year,
      this.maxDate.month - 1,
      this.maxDate.day
    );
    if (
      date.getTime() - minDate.getTime() >= 0 &&
      maxDate.getTime() - date.getTime() >= 0
    ) {
      this.dd = value;
      this.closeDetails();
    }
  }

  onDetails(shipId) {
    this.closeDetails();
    if (this.detailsId != shipId) {
      this.detailsId = shipId;
      this.getAdminAgentSeatList(shipId);
    }
  }

  closeDetails() {
    this.detailsId = null;
    this.seatList = [];
    this.selectedSeat = [];
    this.filteredSeatList = [];
  }

  async getAdminAgentShips(page: number = null) {
    await this.shipService.getAdminAgentShips(page).subscribe(data => {
      this.shipPage = data;
    });
  }

  async getAdminAgentSeatList(shipId) {
    this.seatLoading = true;
    await this.seatService
      .getAdminAgentAvailableSeatListByShiplId(
        shipId,
        this.makeDateString(this.dd)
      )
      .subscribe(data => {
        this.seatList = data;
        this.seatLoading = false;
        this.categoryList = [];
        if (this.seatList.length > 0) {
          this.seatList.forEach(s => {
            const cat: Category = s.category;
            const c = this.categoryList.find(ct => ct.id == cat.id);
            if (!c) {
              this.categoryList.push(cat);
            }
          });
          this.onSelectCategory(
            this.categoryList[this.categoryList.length - 1].id
          );
        }
      });
  }

  onSelectCategory(categoryId: number) {
    this.category = this.categoryList.find(ca => ca.id == categoryId);
    this.filterSeatList(categoryId);
  }

  filterSeatList(categoryId) {
    this.filteredSeatList = [];
    this.seatList.forEach(seat => {
      if (seat.category.id == categoryId) {
        this.filteredSeatList.push(seat);
      }
    });
  }

  selectedSeatContainSeatId(seatId): boolean {
    return this.selectedSeat.some(e => e.id == seatId);
  }

  onCreateUser(event) {
    let user: User = new User(event.name, event.phone);
    let subbookingList: SubBooking[] = this.getSubbookingList(
      this.selectedSeat
    );
    let booking: Booking = new Booking(user, subbookingList);
    const ship = this.shipPage.content.find(s => s.id == this.detailsId);
    booking.ship = ship;
    booking.eStatus = this.mode as SeatStatus;
    this.dataSending = true;
    this.message = 'Sending data to server';
    this.bookingService.createAdminAgentBooking(booking).subscribe(
      data => {
        this.dataSending = false;
        this.message = 'Booking done';
        this.selectedSeat = [];
        this.ticket = data;
        this.getAdminAgentSeatList(this.detailsId);
      },
      error => {
        console.log(error);
      }
    );
  }

  getSubbookingList(seatList: Seat[]): SubBooking[] {
    let subBookingList: SubBooking[] = [];
    seatList.forEach(seat => {
      let sb: SubBooking = new SubBooking(this.makeDateString(this.dd), seat);
      subBookingList.push(sb);
    });
    return subBookingList;
  }

  onSeatClick(seatId) {
    if (this.selectedSeat.some(e => e.id === seatId)) {
      const i = this.selectedSeat.findIndex(s => s.id == seatId);
      this.selectedSeat.splice(i, 1);
    } else {
      const seat = this.filteredSeatList.find(se => se.id == seatId);
      if (seat.available && this.selectedSeat.length < 10) {
        this.selectedSeat.push(seat);
      }
    }
  }

  onTicketClose() {
    this.ticket = null;
  }

  onClear() {
    this.message = '';
  }

  makeDateString(date) {
    const dateString = date.year + '-' + (date.month < 10 ? '0' + date.month : date.month) + '-' + (date.day < 10 ? '0' + date.day : date.day);
    return dateString;
  }
}
