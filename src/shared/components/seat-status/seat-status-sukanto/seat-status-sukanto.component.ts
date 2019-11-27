import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seat } from 'src/shared/models/seat.model';

@Component({
  selector: 'seat-status-sukanto',
  templateUrl: './seat-status-sukanto.component.html',
  styleUrls: ['./seat-status-sukanto.component.scss']
})
export class SeatStatusSukantoComponent {
  @Input() categoryName: string;
  @Input() filteredSeatList: Seat[];

  @Output() select = new EventEmitter<number>();

  onSeatClick(seatId) {
    this.select.emit(seatId);
  }

  getSubArray(start, end) {
    return this.filteredSeatList.slice(start, end + 1);
  }
}
