import { SeatStatus } from './booking.model';

export interface Report {
  journeyDate: Date;
  bookingId: number;
  bookingStatus: SeatStatus;
  bookingDate: Date;
  customerName: string;
  customerPhone: string;
  shipName: string;
  routes: string;
  seatNumbers: string[];
  price: number;
  soldBy: string;
  role: string;
  paid: boolean;
}
