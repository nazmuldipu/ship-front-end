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
  serviceAdminAgentUrl = 'api/v1/adminAgent/ships';
  serviceServiceAdminUrl = 'api/v1/serviceAdmin/ships';
  serviceServiceAgentUrl = 'api/v1/serviceAgent/ships';

  constructor(private dataSource: RestDataService, private router: Router) { }

  getAllShip(page: number = null): Observable<ShipPage> {
    const pageUrl = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceUrl,
      null,
      false,
      pageUrl
    );
  }

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

  updateAdminShip(shipId: number, ship: Ship): Observable<Ship> {
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceAdminUrl + `/${shipId}`,
      ship,
      true,
      null
    );
  }

  getAdminShipMap(shipId: number, startDate: string, endDate: string) {
    const param = `startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(RequestMethod.Get, this.serviceAdminUrl + `/shipMap/${shipId}`, null, true, param);
  }

  updateAdminShipMap(shipId: number, date: string, value: boolean) {
    const param = `date=${date}&value=${value}&`;
    return this.dataSource.sendRequest(RequestMethod.Put, this.serviceAdminUrl + `/updateMap/${shipId}`, null, true, param);
  }

  // ****************************** ADMIN AGENT MODULES ***************************
  getAdminAgentShips(page: number = null): Observable<ShipPage> {
    const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminAgentUrl,
      null,
      true,
      param
    );
  }

  // ****************************** SERVICE ADMIN MODULES ***************************
  getServiceAdminShips(): Observable<Ship[]> {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + '/myShips',
      null,
      true,
      null
    );
  }

  // ****************************** SERVICE AGENT MODULES ***************************
  getServiceAgentShips(): Observable<Ship[]> {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAgentUrl + '/myShips',
      null,
      true,
      null
    );
  }
}
