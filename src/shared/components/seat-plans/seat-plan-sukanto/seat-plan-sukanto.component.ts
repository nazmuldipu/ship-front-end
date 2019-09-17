import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Category } from 'src/shared/models/category.model';
import { Seat } from 'src/shared/models/seat.model';
import { User } from 'src/shared/models/user.model';
import { SubBooking, Booking, SeatStatus } from 'src/shared/models/booking.model';

@Component({
  selector: 'seat-plan-sukanto',
  templateUrl: './seat-plan-sukanto.component.html',
  styleUrls: ['./seat-plan-sukanto.component.scss']
})
export class SeatPlanSukantoComponent implements OnChanges {
  @Input() seatList: Seat[];
  @Input() date: any;

  @Output() booking = new EventEmitter<Booking>();

  mode = 'SEAT_SOLD';

  category: Category;
  categoryList: Category[];

  selectedSeat: Seat[];
  filteredSeatList: Seat[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.seatList && this.seatList.length > 0) {
      this.createCategoryList();
      this.selectedSeat = [];
    }
  }

  createCategoryList() {
    this.categoryList = [];

    this.seatList.forEach(s => {
      const cat: Category = s.category;
      const c = this.categoryList.find(ct => ct.id == cat.id);
      if (!c) {
        this.categoryList.push(cat);
      }
    });
    this.category = this.categoryList[0];
    this.onSelectCategory(this.category.id);
  }

  onSelectCategory(categoryId: number) {
    console.log(categoryId);
    this.category = this.categoryList.find(ca => ca.id == categoryId);
    console.log(this.category);
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

  onSeatClick(seatId) {
    if (this.selectedSeat.some(e => e.id === seatId)) {
      const i = this.selectedSeat.findIndex(s => s.id == seatId);
      this.selectedSeat.splice(i, 1);
    } else {
      const seat = this.filteredSeatList.find(se => se.id == seatId);
      if (seat.available) {
        this.selectedSeat.push(seat);
      }
    }
  }

  onCreateUser(event) {
    const user: User = new User(event.name, event.phone);
    const subbookingList: SubBooking[] = this.getSubbookingList(
      this.selectedSeat
    );
    const booking: Booking = new Booking(user, subbookingList);
    booking.eStatus = this.mode as SeatStatus;

    this.booking.emit(booking);
    this.selectedSeat = [];
  }

  getSubbookingList(seatList: Seat[]): SubBooking[] {
    let subBookingList: SubBooking[] = [];
    seatList.forEach(seat => {
      let sb: SubBooking = new SubBooking(this.makeDateString(this.date), seat);
      subBookingList.push(sb);
    });
    return subBookingList;
  }

  makeDateString(date) {
    const dateString = date.year + '-' + date.month + '-' + date.day;
    return dateString;
  }
}
