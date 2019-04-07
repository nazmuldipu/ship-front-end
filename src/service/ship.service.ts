import { Injectable } from '@angular/core';
import { RestDataService } from 'src/service/rest-data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Ship, ShipPage } from 'src/shared/models/ship.model';
import { RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ShipService {
  serviceUrl = 'api/v1/ships';
  serviceAdminUrl = 'api/v1/admin/ships';

  constructor(private dataSource: RestDataService, private router: Router) {}

  getAdminShipPage(page: number = 0): Observable<ShipPage> {
    const pageUrl = page === null ? '' : `page=${page}&`;

    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl,
      null,
      true,
      pageUrl
    );
  }

  getAdminShip(id: number): Observable<Ship> {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/${id}`,
      null,
      true,
      null
    );
  }

  saveAdminShip(ship: Ship): Observable<Ship> {
    return this.dataSource.sendRequest(
      RequestMethod.Post,
      this.serviceAdminUrl,
      ship,
      true,
      null
    );
  }

  updateAdminHotel(shipId: number, ship: Ship): Observable<Ship> {
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceAdminUrl + `/${shipId}`,
      ship,
      true,
      null
    );
  }
}
