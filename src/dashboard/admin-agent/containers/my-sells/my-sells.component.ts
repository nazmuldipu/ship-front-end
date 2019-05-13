import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/service/booking.service';
import { BookingPage, Booking } from 'src/shared/models/booking.model';

@Component({
  selector: 'app-my-sells',
  templateUrl: './my-sells.component.html',
  styleUrls: ['./my-sells.component.scss']
})
export class MySellsComponent implements OnInit {
  short = true;
  loading = false;
  ticket: Booking;
  bookingPage: BookingPage;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.getAdminAgentMySells();
  }

  async getAdminAgentMySells(page: number = null) {
    this.loading = true;
    await this.bookingService.getAdminAgentMySells(page).subscribe(data => {
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
