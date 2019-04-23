import { Seat } from './seat.model';
import { Ship } from './ship.model';
import { User } from './user.model';

export interface Booking {
  id: number;
  created: Date;
  lastUpdated: Date;
  createdBy: User;
  updatedBy: User;
  subBookingList: SubBooking[];
  ship: Ship;

  refBy: string;
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

export class SubBooking {
  constructor(date, seat: Seat) {
    this.date = date;
    this.fare = seat.category.fare;
    this.discount = seat.category.discount;
    this.commission = 0;
    this.seat = seat;
  }

  date: Date;
  fare: number;
  discount: number;
  commission: number;
  payablePrice: number;
  paid: boolean;
  seat: Seat;
}

export enum SeatStatus {
  SEAT_BLOCKED = 'Blocked',
  SEAT_RESERVED = 'Reserved',
  SEAT_SOLD = 'Sold',
  SEAT_FREE = 'Free'
  // SEAT_BOOKED = 'Booked',
}
