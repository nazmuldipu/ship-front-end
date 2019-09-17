import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipService } from 'src/service/ship.service';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  id: number;
  ship: Ship;

  constructor(
    private shipService: ShipService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.id) {
      this.getShip(this.id);
    }
  }

  async getShip(id: number) {
    await this.shipService.getAdminShip(id).subscribe(data => {
      this.ship = data as Ship;
    });
  }

  onCreate(ship: Ship) {
    this.shipService.saveAdminShip(ship).subscribe(data => {
      this.router.navigate(['/dashboard/admin/ships']);
    });
  }

  onUpdate(ship: Ship) {
    this.shipService.updateAdminShip(this.id, ship).subscribe(data => {
      this.router.navigate(['/dashboard/admin/ships']);
    });
  }
}
