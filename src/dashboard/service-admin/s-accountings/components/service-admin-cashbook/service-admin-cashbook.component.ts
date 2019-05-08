import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShipCashbookPage } from 'src/shared/models/ship-cashbook';

@Component({
  selector: 'service-admin-cashbook',
  templateUrl: './service-admin-cashbook.component.html',
  styleUrls: ['./service-admin-cashbook.component.scss']
})
export class ServiceAdminCashbookComponent {
  @Input() shipCashbookPage: ShipCashbookPage;
  @Output() page = new EventEmitter<number>();

  getServiceAdminCashbookByShipId(page: number) {
    this.page.emit(page);
  }
}
