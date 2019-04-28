import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminCashbookPage } from 'src/shared/models/admin-cashbook.model';

@Component({
  selector: 'admin-cashbook-table',
  templateUrl: './admin-cashbook-table.component.html',
  styleUrls: ['./admin-cashbook-table.component.scss']
})
export class AdminCashbookTableComponent {
  @Input() adminCashbookPage: AdminCashbookPage;
  @Output() page = new EventEmitter<number>();

  getAdminCashbook(page: number = 0) {
    this.page.emit(page);
  }
}
