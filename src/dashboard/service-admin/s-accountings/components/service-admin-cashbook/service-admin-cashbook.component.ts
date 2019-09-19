import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShipAdminCashbookPage } from 'src/shared/models/ship-admin-cashbook.model';

@Component({
  selector: 'service-admin-cashbook',
  templateUrl: './service-admin-cashbook.component.html',
  styleUrls: ['./service-admin-cashbook.component.scss']
})
export class ServiceAdminCashbookComponent {
  @Input() shipAdminCashbookPage: ShipAdminCashbookPage;
  @Output() page = new EventEmitter<number>();

  getShipAdminCashbook(page: number) {
    this.page.emit(page);
  }
}
