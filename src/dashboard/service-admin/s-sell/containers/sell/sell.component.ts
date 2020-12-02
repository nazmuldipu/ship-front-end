import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/service/ship.service';
import { Ship } from 'src/shared/models/ship.model';
import {
  Booking,
  SubBooking,
  SeatStatus
} from 'src/shared/models/booking.model';
import { Category } from 'src/shared/models/category.model';
import { Seat } from 'src/shared/models/seat.model';
import { SeatsService } from 'src/service/seats.service';
import { User } from 'src/shared/models/user.model';
import { BookingService } from 'src/service/booking.service';
import { UtilService } from 'src/service/util.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  detailsId;
  booking: Booking;
  category: Category;
  seatList: Seat[];
  selectedSeat: Seat[] = [];
  filteredSeatList: Seat[];
  categoryList: Category[] = [];
  seatLoading = false;
  dataSending = false;
  message = '';
  ships: Ship[];

  ticket;
  dd;
  minDate;
  maxDate;
  discount = 0;
  payable;
  mode = 'SEAT_SOLD';

  constructor(
    private shipService: ShipService,
    private seatService: SeatsService,
    private bookinService: BookingService,
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
    if (this.maxDate.month > 12) {
      this.maxDate.year += 1;
      this.maxDate.month -= 12;
    }
    this.getServiceAdminShips();
  }

  async getServiceAdminShips() {
    try {
      this.ships = await this.shipService.getServiceAdminShips().toPromise();
      this.ships.sort(this.utilService.dynamicSortObject('priority'));
    } catch (err) { console.log(err) }
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
      this.getAdminSeatList(shipId);
    }
  }

  closeDetails() {
    this.detailsId = null;
    this.seatList = [];
    this.selectedSeat = [];
    this.filteredSeatList = [];
  }

  async getAdminSeatList(shipId) {
    this.seatLoading = true;
    try {
      this.seatList = await this.seatService.getServiceAdminAvailableSeatListByShiplId(shipId, this.makeDateString(this.dd)).toPromise();
      this.seatLoading = false;
      this.categoryList = [];
      if (this.seatList && this.seatList.length > 0) {
        this.seatList.forEach(s => {
          const cat: Category = s.category;
          const c = this.categoryList.find(ct => ct.id == cat.id);
          if (!c && cat.priority != 0) { //Categoty with priority 0 will not display
            this.categoryList.push(cat);
          }
        });
        this.categoryList.sort(this.utilService.dynamicSortObject('priority'));
        this.onSelectCategory(
          this.categoryList[this.categoryList.length - 1].id
        );
      }
    } catch (err) { console.log(err) }
  }

  onSelectCategory(categoryId: number) {
    this.category = this.categoryList.find(ca => ca.id == categoryId);
    this.selectedSeat = [];
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

  makeDateString(date) {
    const dateString = date.year + '-' + (date.month < 10 ? '0' + date.month : date.month) + '-' + (date.day < 10 ? '0' + date.day : date.day);
    return dateString;
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
    this.onDiscountChange(this.discount);
  }

  async onCreateUser(event) {
    let user: User = new User(event.name, event.phone);
    let subbookingList: SubBooking[] = this.getSubbookingList(
      this.selectedSeat
    );
    let booking: Booking = new Booking(user, subbookingList);
    if (this.discount > 0) {
      booking.bookingDiscount = this.discount;
    }
    const ship = this.ships.find(s => s.id == this.detailsId);
    booking.ship = ship;
    booking.eStatus = this.mode as SeatStatus;
    this.dataSending = true;
    this.message = 'Sending data to server';
    try {
      this.ticket = await this.bookinService.createServiceAdminBooking(booking).toPromise();
      this.dataSending = false;
      this.message = 'Booking done';
      this.selectedSeat = [];
      this.getAdminSeatList(this.detailsId);
    } catch (err) { console.log(err) }
  }

  getSubbookingList(seatList: Seat[]): SubBooking[] {
    let subBookingList: SubBooking[] = [];
    seatList.forEach(seat => {
      let sb: SubBooking = new SubBooking(this.makeDateString(this.dd), seat);
      subBookingList.push(sb);
    });
    return subBookingList;
  }

  selectedSeatContainSeatId(seatId): boolean {
    return this.selectedSeat.some(e => e.id == seatId);
  }
  onClear() {
    this.message = '';
  }
  onTicketClose() {
    this.ticket = null;
  }
  onDiscountChange(discount) {
    let total = 0;
    this.selectedSeat.forEach(ss => {
      total += ss.category.fare;
    })
    this.payable = total - discount;
    this.discount = discount;
  }
}
