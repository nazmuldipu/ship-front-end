import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seat } from 'src/shared/models/seat.model';
import { Booking } from 'src/shared/models/booking.model';
import { Category } from 'src/shared/models/category.model';

@Component({
  selector: 'seat-plan-other',
  templateUrl: './seat-plan-other.component.html',
  styleUrls: ['./seat-plan-other.component.scss']
})
export class SeatPlanOtherComponent implements OnInit {
  @Input() categoryName: string;
  @Input() filteredSeatList: Seat[];
  @Input() selectedSeat: Seat[];

  @Output() select = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSeatClick(seatId) {
    this.select.emit(seatId);
  }

  selectedSeatContainSeatId(seatId) {
    return this.selectedSeat.some(e => e.id == seatId);
  }

}
