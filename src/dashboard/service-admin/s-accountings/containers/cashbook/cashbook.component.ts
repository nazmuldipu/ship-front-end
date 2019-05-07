import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-cashbook',
  templateUrl: './cashbook.component.html',
  styleUrls: ['./cashbook.component.scss']
})
export class CashbookComponent implements OnInit {
  ship: Ship;

  constructor() {}

  ngOnInit() {}

  onShipSelect(ship: Ship) {
    this.ship = ship;
  }
}
