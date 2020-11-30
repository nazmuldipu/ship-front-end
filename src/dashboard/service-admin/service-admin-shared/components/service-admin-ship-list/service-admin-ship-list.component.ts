import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { ShipService } from 'src/service/ship.service';
import { UtilService } from 'src/service/util.service';

@Component({
  selector: 'service-admin-ship-list',
  templateUrl: './service-admin-ship-list.component.html',
  styleUrls: ['./service-admin-ship-list.component.scss']
})
export class ServiceAdminShipListComponent implements OnInit {
  // mode 1 = Add category, 2 = Category List, 3 = Add Seats, 4 = Seat list
  @Input() mode: number;
  @Output() ship = new EventEmitter<Ship>();
  ships: Ship[];

  constructor(private shipService: ShipService, private utilService: UtilService) { }

  ngOnInit() {
    this.getServiceAdminShips();
  }

  async getServiceAdminShips() {
    try {
      this.ships = await this.shipService.getServiceAdminShips().toPromise();
      this.ships.sort(this.utilService.dynamicSortObject('priority'));
    } catch (err) { console.log(err) }

  }

  onSelectShip(id: number) {
    const value = this.ships.find(s => s.id == id) as Ship;
    // this.shipId.emit(id);
    this.ship.emit(value);
  }
}
