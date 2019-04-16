import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShipService } from 'src/service/ship.service';
import { CategoryService } from 'src/service/category.service';
import { CategoryPage } from 'src/shared/models/category.model';
import { ShipPage } from 'src/shared/models/ship.model';

@Component({
  selector: 'admin-hotel-list',
  templateUrl: './admin-hotel-list.component.html',
  styleUrls: ['./admin-hotel-list.component.scss']
})
export class AdminHotelListComponent implements OnInit {
  @Output() shipId = new EventEmitter<number>();
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
    this.shipId.emit(id);
  }
}
