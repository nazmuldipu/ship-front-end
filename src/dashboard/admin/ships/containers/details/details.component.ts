import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/service/ship.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
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
    this.shipService.getAdminShip(this.id).subscribe(data => {
      this.ship = data;
    });
  }
  onEdit() {
    this.router.navigate(['/dashboard/admin/ships/add/', this.id]);
  }
}
