import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/service/ship.service';
import { Router } from '@angular/router';
import { ShipPage } from 'src/shared/models/ship.model';
import { UtilService } from 'src/service/util.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  shipPage: ShipPage;

  constructor(private shipService: ShipService, private router: Router, private utilService: UtilService) { }

  ngOnInit() {
    this.getAdminShipPage();
  }

  getAdminShipPage(page: number = 0) {
    this.shipService.getAdminShipPage(page).subscribe(data => {
      this.shipPage = data;
      this.shipPage.content.sort(this.utilService.dynamicSortObject('priority'));
    });
  }
  onDetails(id: number) {
    this.router.navigate(['/dashboard/admin/ships', id]);
  }
}
