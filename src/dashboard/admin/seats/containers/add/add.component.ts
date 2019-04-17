import { Component, OnInit } from '@angular/core';
import { SeatsService } from 'src/service/seats.service';
import { Category } from 'src/shared/models/category.model';
import { Ship } from 'src/shared/models/ship.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Seat } from 'src/shared/models/seat.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  id;
  seat: Seat;
  seatList: Seat[];
  ship: Ship;
  category: Category;

  constructor(
    private seatService: SeatsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  onSelectShip(ship) {
    this.ship = ship;
  }

  onSelectCategory(category) {
    this.category = category;
    this.seat = null;
    this.getAdminSeatListByCategoryId(category.id);
  }

  async getAdminSeatListByCategoryId(categoryId) {
    await this.seatService
      .getAdminSeatListByCategoryId(categoryId)
      .subscribe(data => {
        this.seatList = data;
      });
  }

  onCreate(seat, shipId) {
    this.seatService.saveAdminSeat(seat, shipId).subscribe(data => {
      this.getAdminSeatListByCategoryId(this.category.id);
    });
  }

  onUpdate(seat, shipId, seatId) {
    console.log('onUpdate', seat);
    this.seatService.updateAdminSeat(seat, shipId, seatId).subscribe(data => {
      this.seat = null;
      this.getAdminSeatListByCategoryId(this.category.id);
    });
  }

  onCategoryBack(event) {
    this.ship = null;
    this.category = null;
  }

  onSeatClick(id) {
    console.log(id);
    const value = this.seatList.find(s => s.id == id);
    this.seat = value;
  }
}
