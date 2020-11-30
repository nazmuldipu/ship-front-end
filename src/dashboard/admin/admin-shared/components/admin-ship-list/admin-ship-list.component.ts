import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShipService } from 'src/service/ship.service';
import { CategoryService } from 'src/service/category.service';
import { CategoryPage } from 'src/shared/models/category.model';
import { ShipPage, Ship } from 'src/shared/models/ship.model';
import { UtilService } from 'src/service/util.service';

@Component({
  selector: 'admin-ship-list',
  templateUrl: './admin-ship-list.component.html',
  styleUrls: ['./admin-ship-list.component.scss']
})
export class AdminShipListComponent implements OnInit {
  //Note: mode 1 = Add category, 2 = Category List, 3 = Add Seats, 4 = Seat list
  @Input() mode: number;
  @Output() ship = new EventEmitter<Ship>();
  shipPage: ShipPage;

  constructor(private shipService: ShipService, private utilService: UtilService) { }

  ngOnInit() {
    this.getAdminShipPage(0);
  }

  async getAdminShipPage(page: number = 0) {
    try {
      this.shipPage = await this.shipService.getAdminShipPage(page).toPromise();
      this.shipPage.content.sort(this.utilService.dynamicSortObject('priority'));
    } catch (err) { console.log(err) }
  }

  onSelectShip(id: number) {
    const value = this.shipPage.content.find(s => s.id == id) as Ship;
    this.ship.emit(value);
  }
}
