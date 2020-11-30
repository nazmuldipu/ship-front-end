import { Component, Input } from '@angular/core';
import { Seat } from 'src/shared/models/seat.model';

@Component({
  selector: 'ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent {
  @Input() seatList: Seat[];

  constructor() { }

  getTotal() {
    let total = 0;
    this.seatList.forEach(s => {
      total += s.category.fare - s.category.discount;
    });
    return total;
  }
}
