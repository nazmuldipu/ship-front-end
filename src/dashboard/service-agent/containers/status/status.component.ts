import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/service/util.service';
import { BookingService } from 'src/service/booking.service';
import { SeatsService } from 'src/service/seats.service';
import { Booking, SeatStatusList, SeatStatus } from 'src/shared/models/booking.model';
import { Ship } from 'src/shared/models/ship.model';
import { ShipService } from 'src/service/ship.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  dd;
  minDate;
  maxDate;
  ticket: Booking;
  ships: Ship[];
  ship: Ship;
  category: string;
  categoryList: string[] = [];
  seatList: SeatStatusList[] = [];
  filteredSeatList: SeatStatusList[] = [];
  shortTicket = true;

  errorMessage = '';
  loading = false;

  constructor(private seatsService: SeatsService, private bookingService: BookingService,
    private shipService: ShipService, private utilService: UtilService) { }

  ngOnInit(): void {
    this.setDateRanges();
    this.getServiceAgentShips();
  }

  setDateRanges() {
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
      month: date.getMonth() + 3, //Maximum 2 month from now
      day: date.getDate()
    };
  }

  onDateChange() {
    if (this.ship) {
      this.getShipSeatStatus(this.ship.id, this.dd);
    }
  }

  onSelectShip(ship: Ship) {
    console.log(ship);
    this.ship = ship;
    this.getShipSeatStatus(ship.id, this.dd);
  }

  async getServiceAgentShips() {
    try {
      this.errorMessage = '';
      this.loading = true;
      this.ships = await this.shipService.getServiceAgentShips().toPromise();
      this.ships.sort(this.utilService.dynamicSortObject('priority'));
      this.loading = false;
    } catch (err) { console.log(err); this.errorMessage = err['error']; }
  }

  async getShipSeatStatus(shipId, date) {
    try {
      this.errorMessage = '';
      this.seatList = await this.seatsService.getServiceAgentSeatStatusListByShiplId(shipId, this.utilService.getDateStringFromDateObj(date)).toPromise();
      this.categoryList = [];
      this.seatList.forEach(s => {
        const cat = s.category;
        const c = this.categoryList.find(ct => ct['name'] == cat['name']);
        if (!c) {
          this.categoryList.push(cat);
        }
      });
      this.categoryList.sort(this.utilService.dynamicSortObject('priority'));
      this.onSelectCategory(this.categoryList[0]);
    } catch (err) { console.log(err); this.errorMessage = err['error']; }
  }

  onSelectCategory(category: string) {
    this.category = this.categoryList.find(ca => ca['name'] == category['name']);
    this.filterSeatList(category);
  }

  filterSeatList(category) {
    this.filteredSeatList = [];
    this.seatList.forEach(seat => {
      if (seat.category['name'] == category['name']) {
        this.filteredSeatList.push(seat);
      }
    });
  }

  onSeatClick(id: number) {
    const value: SeatStatusList = this.filteredSeatList.find(fs => fs.id == id);
    if (value.bookingId) {
      if (this.ticket == null || this.ticket.id != value.bookingId) {
        this.getServiceAgentBooking(value.bookingId);
      }
    } else {
      this.ticket = null;
    }
  }

  async getServiceAgentBooking(bookingId) {
    this.errorMessage = '';
    try {
      this.ticket = await this.bookingService.getServiceAgentBooking(bookingId).toPromise();
    } catch (err) { console.log(err); this.errorMessage = err['error']; }
  }

  onTicketClose(event) {
    this.ticket = null;
  }

  onClear() {
    this.errorMessage = '';
    this.ticket = null;
  }

  async onCancelBooking(bookingId, status) {
    if (confirm('Are you sure to cancel booking with id : ' + bookingId)) {
      this.errorMessage = '';
      if (status == SeatStatus.SEAT_SOLD) {
        try {
          const resp = await this.bookingService.cancelServiceAgentBooking(bookingId).toPromise();
          this.getShipSeatStatus(this.ship.id, this.dd);
          this.ticket = null;
        } catch (err) { console.log(err); this.errorMessage = err['error']; }

      } else if (status == SeatStatus.SEAT_RESERVED) {
        try {
          await this.bookingService.cancelServiceAgentReservation(bookingId).toPromise();
          this.ticket = null;
          this.getShipSeatStatus(this.ship.id, this.dd);
        } catch (err) { console.log(err); this.errorMessage = err['error']; }
      }
    }
  }

  async onConfirmReservation(bookingId) {
    if (
      confirm('Are you sure to confirm your reservation with id : ' + bookingId)
    ) {
      this.errorMessage = '';
      try {
        await this.bookingService.confirmServiceAgentReservation(bookingId).toPromise();
        this.ticket = null;
        this.getShipSeatStatus(this.ship.id, this.dd);
      } catch (err) { console.log(err['error']); this.errorMessage = err['error']; }
    }
  }
}
