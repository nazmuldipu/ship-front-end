import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeatsService } from 'src/service/seats.service';
import { Category } from 'src/shared/models/category.model';
import { Seat } from 'src/shared/models/seat.model';
import { Ship } from 'src/shared/models/ship.model';

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
  loading = false;

  constructor(
    private seatService: SeatsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() { }

  onSelectShip(ship) {
    this.ship = ship;
  }

  onSelectCategory(category) {
    this.category = category;
    this.seat = null;
    this.getAdminSeatListByCategoryId(category.id);
  }

  async getAdminSeatListByCategoryId(categoryId) {
    // this.spinnerService.show();
    this.seatList = null;
    await this.seatService
      .getAdminSeatListByCategoryId(categoryId)
      .subscribe(data => {
        this.seatList = data;
        // this.spinnerService.hide();
      });
  }

  onCreate(seat, shipId) {
    this.loading = true;
    this.seatService.saveAdminSeat(seat, shipId).subscribe(data => {
      this.getAdminSeatListByCategoryId(this.category.id);
      this.loading = false;
    });
  }

  onUpdate(seat, shipId, seatId) {
    this.loading = true;
    this.seatService.updateAdminSeat(seat, shipId, seatId).subscribe(data => {
      this.seat = null;
      this.getAdminSeatListByCategoryId(this.category.id);
      this.loading = false;
    });
  }

  onCategoryBack(event) {
    this.ship = null;
    this.category = null;
  }

  onSeatClick(id) {
    const value = this.seatList.find(s => s.id == id);
    this.seat = value;
  }
}
