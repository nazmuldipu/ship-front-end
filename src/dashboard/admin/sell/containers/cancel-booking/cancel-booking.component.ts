import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/service/booking.service';
import { BookingPage, Booking } from 'src/shared/models/booking.model';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.scss']
})
export class CancelBookingComponent implements OnInit {
  bookingPage: BookingPage;
  short = true;
  ticket: Booking;
  loading = false;
  message = '';

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.getAdminBookings();
  }

  async getAdminBookings(page: number = 0) {
    this.bookingService.getAdminBookings(page).subscribe(data => {
      this.bookingPage = data;
    });
  }

  onBookingDetails(id) {
    this.ticket = this.bookingPage.content.find(b => b.id == id);
  }
  onTicketClose() {
    this.ticket = null;
  }

  async onCancelBooking(id) {
    console.log('cancle ', id);
    await this.bookingService.cancelAdminBooking(id).subscribe(data => {
      console.log(data);
      this.message = 'Booking cancel done';
      this.ticket = null;
      this.getAdminBookings(this.bookingPage.number);
    });
  }

  clear() {
    this.message = '';
  }
}
