import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Seat } from 'src/shared/models/seat.model';

@Component({
  selector: 'seat-plan-sukanto',
  templateUrl: './seat-plan-sukanto.component.html',
  styleUrls: ['./seat-plan-sukanto.component.scss']
})
export class SeatPlanSukantoComponent {
  @Input() categoryName: string;
  @Input() filteredSeatList: Seat[];
  @Input() selectedSeat: Seat[];

  @Output() select = new EventEmitter<number>();

  constructor() { }

  onSeatClick(seatId) {
    this.select.emit(seatId);
  }

  selectedSeatContainSeatId(seatId) {
    return this.selectedSeat.some(e => e.id == seatId);
  }
}
