import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Seat } from 'src/shared/models/seat.model';
import { AuthService } from 'src/service/auth.service';
import { UtilService } from 'src/service/util.service';

@Component({
  selector: 'seat-status-bay-cruiser',
  templateUrl: './seat-status-bay-cruiser.component.html',
  styleUrls: ['./seat-status-bay-cruiser.component.scss']
})
export class SeatStatusBayCruiserComponent implements OnChanges {
  @Input() categoryName: string;
  @Input() filteredSeatList: Seat[];

  @Output() select = new EventEmitter<number>();

  constructor(private auth: AuthService, private util: UtilService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filteredSeatList && this.filteredSeatList.length > 0) {
      if (this.categoryName == 'Rajanigandha')
        this.filteredSeatList.sort(this.util.dynamicSortObject('id'));
    }
  }

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
