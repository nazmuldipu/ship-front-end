import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Seat } from 'src/shared/models/seat.model';

@Component({
  selector: 'seat-plan-bay-cruiser',
  templateUrl: './seat-plan-bay-cruiser.component.html',
  styleUrls: ['./seat-plan-bay-cruiser.component.scss']
})
export class SeatPlanBayCruiserComponent {

  @Input() categoryName: string;
  @Input() filteredSeatList: Seat[];
  @Input() selectedSeat: Seat[];

  @Output() select = new EventEmitter<number>();

  onSeatClick(seatId) {
    this.select.emit(seatId);
  }

  selectedSeatContainSeatId(seatId) {
    return this.selectedSeat.some(e => e.id == seatId);
  }

  getSubArray(start, end) {
    return this.filteredSeatList.slice(start, end + 1);
  }

}
