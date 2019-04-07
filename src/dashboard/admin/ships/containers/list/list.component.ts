import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/service/ship.service';
import { Router } from '@angular/router';
import { ShipPage } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  shipPage: ShipPage;

  constructor(private shipService: ShipService, private router: Router) {}

  ngOnInit() {
    this.getAdminShipPage();
  }

  getAdminShipPage(page: number = 0) {
    this.shipService.getAdminShipPage(page).subscribe(data => {
      this.shipPage = data;
    });
  }
  onDetails(id: number) {
    this.router.navigate(['/dashboard/admin/ships', id]);
  }
}
