import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/service/booking.service';
import { Booking, BookingPage } from 'src/shared/models/booking.model';

@Component({
  selector: 'app-mysells',
  templateUrl: './mysells.component.html',
  styleUrls: ['./mysells.component.scss']
})
export class MysellsComponent implements OnInit {
  short = true;
  loading = false;
  ticket: Booking;
  bookingPage: BookingPage;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.getMyBookings();
  }

  async getMyBookings(page: number = 0) {
    this.loading = true;
    await this.bookingService.getAdminMySells(page).subscribe(data => {
      this.bookingPage = data;
      this.loading = false;
    });
  }

  onBookingDetails(id) {
    this.ticket = this.bookingPage.content.find(b => b.id == id);
  }

  onTicketClose() {
    this.ticket = null;
  }
}
