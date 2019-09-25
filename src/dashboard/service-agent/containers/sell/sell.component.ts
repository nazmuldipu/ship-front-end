import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/service/booking.service';
import { SeatsService } from 'src/service/seats.service';
import { ShipService } from 'src/service/ship.service';
import { Ship } from 'src/shared/models/ship.model';
import { Seat } from 'src/shared/models/seat.model';
import { Category } from 'src/shared/models/category.model';
import { User } from 'src/shared/models/user.model';
import { SubBooking, Booking, SeatStatus } from 'src/shared/models/booking.model';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  dd;
  minDate;
  maxDate;
  ticket;
  detailsId;
  mode = 'SEAT_SOLD';
  seatLoading = false;
  dataSending = false;

  message = '';
  category: Category;
  ships: Ship[];
  seatList: Seat[];
  selectedSeat: Seat[] = [];
  filteredSeatList: Seat[];
  categoryList: Category[] = [];

  constructor(private shipService: ShipService,
    private seatService: SeatsService,
    private bookinService: BookingService) { }

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
    this.getServiceAgentShips();
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

  async getServiceAgentShips() {
    await this.shipService.getServiceAgentShips().subscribe(data => {
      this.ships = data;
    })
  }

  onDetails(shipId) {
    this.closeDetails();
    if (this.detailsId != shipId) {
      this.detailsId = shipId;
      this.getShipAgentSeatList(shipId);
    }
  }

  closeDetails() {
    this.detailsId = null;
    this.seatList = [];
    this.selectedSeat = [];
    this.filteredSeatList = [];
  }

  async getShipAgentSeatList(shipId) {
    this.seatLoading = true;
    await this.seatService
      .getServiceAgentAvailableSeatListByShiplId(
        shipId,
        this.makeDateString(this.dd)
      )
      .subscribe(data => {
        this.seatList = data;
        this.seatLoading = false;
        this.categoryList = [];
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
      });
  }

  makeDateString(date) {
    const dateString = date.year + '-' + date.month + '-' + date.day;
    return dateString;
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


  onCreateUser(event) {
    let user: User = new User(event.name, event.phone);
    let subbookingList: SubBooking[] = this.getSubbookingList(
      this.selectedSeat
    );
    let booking: Booking = new Booking(user, subbookingList);
    booking.eStatus = this.mode as SeatStatus;
    this.dataSending = true;
    this.message = 'Sending data to server';
    this.bookinService.createServiceAgentBooking(booking).subscribe(data => {
      this.dataSending = false;
      this.message = 'Booking done';
      this.selectedSeat = [];
      this.ticket = data;
      this.getShipAgentSeatList(this.detailsId);
    }, error => {
      console.log(error);
    });
  }

  getSubbookingList(seatList: Seat[]): SubBooking[] {
    let subBookingList: SubBooking[] = [];
    seatList.forEach(seat => {
      let sb: SubBooking = new SubBooking(this.makeDateString(this.dd), seat);
      subBookingList.push(sb);
    });
    return subBookingList;
  }

  onTicketClose() {
    this.ticket = null;
  }

}
