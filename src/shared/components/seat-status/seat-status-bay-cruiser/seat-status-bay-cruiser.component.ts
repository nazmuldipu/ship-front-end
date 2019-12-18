import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Seat } from 'src/shared/models/seat.model';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'seat-status-bay-cruiser',
  templateUrl: './seat-status-bay-cruiser.component.html',
  styleUrls: ['./seat-status-bay-cruiser.component.scss']
})
export class SeatStatusBayCruiserComponent {
  @Input() categoryName: string;
  @Input() filteredSeatList: Seat[];

  @Output() select = new EventEmitter<number>();

  constructor(private auth: AuthService) { }

  onSeatClick(seatId) {
    this.select.emit(seatId);
  }

  getSubArray(start, end) {
    return this.filteredSeatList.slice(start, end + 1);
  }

  isAdminOrServiceAdmin(): boolean {
    if (this.auth.isAdmin() || this.auth.isServiceAdmin()) return true;
    return false;
  }

}
