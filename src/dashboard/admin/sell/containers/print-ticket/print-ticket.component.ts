import { Component } from '@angular/core';
import { BookingService } from 'src/service/booking.service';
import { Booking } from 'src/shared/models/booking.model';

@Component({
  selector: 'app-print-ticket',
  templateUrl: './print-ticket.component.html',
  styleUrls: ['./print-ticket.component.scss']
})
export class PrintTicketComponent {
  ticketId;
  ticket: Booking;
  errorMessage = '';
  constructor(private bookingService: BookingService) { }

  getTicket() {
    this.getAdminBooking(this.ticketId);
  }

  async getAdminBooking(bookingId) {
    this.errorMessage = '';
    this.ticket = null;
    try {
      const resp = await this.bookingService.getAdminBooking(bookingId).toPromise();
      if (resp.id) {
        if (resp.cancelled == false) {
          this.ticket = resp;
        } else {
          this.errorMessage = 'This ticket has been canceled';
        }
      } else {
        this.errorMessage = 'No ticket found with id ' + bookingId;
      }
    } catch (err) { console.log(err) }
  }

  onTicketClose() {
    this.ticket = null;
  }

  onCloseButton() {
    this.ticket = null;
    this.errorMessage = '';
  }

}
