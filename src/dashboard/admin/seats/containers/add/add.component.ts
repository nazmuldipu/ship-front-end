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
  }

  onCreate(seat, shipId) {
    console.log('onCreate : ', shipId, seat);
    this.seatService.saveAdminSeat(seat, shipId).subscribe(data => {
      this.router.navigate(['/dashboard/admin/seats', data.id]);
    });
  }

  onUpdate(seat, shipId) {
    console.log('onUpdate', seat);
  }

  onCategoryBack(event) {
    this.ship = null;
    this.category = null;
  }
}
