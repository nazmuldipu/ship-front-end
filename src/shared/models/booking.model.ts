import { Seat } from './seat.model';
import { Ship } from './ship.model';
import { User } from './user.model';
import { Sort } from './sort.model';

export class Booking {
  constructor(user: User, subBookingList: SubBooking[]) {
    this.user = user;
    this.subBookingList = subBookingList;
  }
  id: number;
  created: Date;
  lastUpdated: Date;
  createdBy: User;
  updatedBy: User;
  subBookingList: SubBooking[];
  ship: Ship;

  refBy: string;
  shipName: string;
  categoryName: string;
  totalFare: number;
  totalDiscount: number;
  totalCommission: number;
  promotionDiscount: number;
  totalPayablePrice: number;

  agentDiscount: number;
  hotelswaveDiscount: number;
  hotelswaveAgentDiscount: number;

  eStatus: SeatStatus;

  manualBooking: boolean;
  confirmed: boolean;
  approved: boolean;
  paid: boolean;
  cancelled: boolean;
  user: User;
}

export class BookingPage {
  constructor(
    public content?: Booking[],
    public first?: boolean,
    public last?: boolean,
    public number?: number,
    public numberOfElements?: number,
    public size?: number,
    public sort?: Sort[],
    public totalElements?: number,
    public totalPages?: number
  ) {}
}

export class SubBooking {
  constructor(date, seat: Seat) {
    this.date = date;
    this.seatNumber = seat.seatNumber;
    this.fare = seat.category.fare;
    this.discount = seat.category.discount;
    this.commission = 0;
    this.payablePrice = this.fare - this.discount;
    this.seat = seat;
  }

  date: Date;
  seatNumber: string;
  fare: number;
  discount: number;
  commission: number;
  payablePrice: number;
  paid: boolean;
  seat: Seat;
}

export enum SeatStatus {
  SEAT_BLOCKED = 'SEAT_BLOCKED',
  SEAT_RESERVED = 'SEAT_RESERVED',
  SEAT_SOLD = 'SEAT_SOLD',
  SEAT_FREE = 'SEAT_FREE'
}
