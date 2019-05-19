import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShipService } from 'src/service/ship.service';
import { CategoryService } from 'src/service/category.service';
import { CategoryPage } from 'src/shared/models/category.model';
import { ShipPage, Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'admin-ship-list',
  templateUrl: './admin-ship-list.component.html',
  styleUrls: ['./admin-ship-list.component.scss']
})
export class AdminShipListComponent implements OnInit {
  // mode 1 = Add category, 2 = Category List, 3 = Add Seats, 4 = Seat list
  @Input() mode: number;
  // @Output() shipId = new EventEmitter<number>();
  @Output() ship = new EventEmitter<Ship>();
  shipPage: ShipPage;

  constructor(private shipService: ShipService) {}

  ngOnInit() {
    this.getAdminShipPage(0);
  }

  async getAdminShipPage(page: number = 0) {
    await this.shipService.getAdminShipPage(page).subscribe(data => {
      this.shipPage = data;
    });
  }

  onSelectShip(id: number) {
    const value = this.shipPage.content.find(s => s.id == id) as Ship;
    // this.shipId.emit(id);
    this.ship.emit(value);
  }
}