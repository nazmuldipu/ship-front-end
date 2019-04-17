import { Component, OnInit } from '@angular/core';
import { SeatsService } from 'src/service/seats.service';
import { Category } from 'src/shared/models/category.model';
import { SeatPage, Seat } from 'src/shared/models/seat.model';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  ship: Ship;
  category: Category;
  seatList: Seat[];
  message = '';

  constructor(private seatService: SeatsService) {}

  ngOnInit() {}

  onSelectShip(ship) {
    this.ship = ship;
    // this.getAdminSeatPage(ship.id);
    // console.log(ship);
    // this.getCategoryPage(shipId);
  }

  onSelectCategory(category) {
    this.category = category;
    this.getAdminSeatListByCategoryId(category.id);
  }

  async getAdminSeatListByCategoryId(categoryId) {
    await this.seatService
      .getAdminSeatListByCategoryId(categoryId)
      .subscribe(data => {
        this.seatList = data;
      });
  }

  // async getAdminSeatPage(shipId, page = 0) {
  //   await this.seatService
  //     .getAdminSeatPageByShiplId(shipId, page)
  //     .subscribe(data => {
  //       this.seatPage = data;
  //     });
  // }
  onCategoryBack(event) {
    this.ship = null;
  }
}
