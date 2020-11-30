import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/service/booking.service';
import { Booking } from 'src/shared/models/booking.model';

@Component({
  selector: 'app-print-ticket',
  templateUrl: './print-ticket.component.html',
  styleUrls: ['./print-ticket.component.scss']
})
export class PrintTicketComponent implements OnInit {
  ticketId;
  ticket: Booking;
  errorMessage = '';
  constructor(private bookingService: BookingService) { }

  ngOnInit() { }

  getTicket() {
    this.getServiceAdminBooking(this.ticketId);
  }

  async getServiceAdminBooking(bookingId) {
    this.errorMessage = '';
    this.ticket = null;
    try {
      const resp = await this.bookingService.getServiceAdminBooking(bookingId).toPromise();
      if (resp.id) {
        if (resp.cancelled == false) {
          this.ticket = resp;
        } else {
          this.errorMessage = 'This ticket has been canceled';
        }
      } else {
        this.errorMessage = 'No ticket found with id ' + bookingId;
      }
    } catch (err) {
      console.log(err);
      this.errorMessage = 'Invalid ticket id';
    }
  }

  onTicketClose() {
    this.ticket = null;
  }

  onCloseButton() {
    this.ticket = null;
    this.errorMessage = '';
  }
}
