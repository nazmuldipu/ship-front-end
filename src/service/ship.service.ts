import { Injectable } from '@angular/core';
import { RestDataService } from 'src/service/rest-data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Ship, ShipPage } from 'src/shared/models/ship.model';
import { HttpParams } from '@angular/common/http';
//import { RequestMethod } from '@angular/http';

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

  getAllShip(page: number = 0): Observable<ShipPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceUrl,
      null,
      false,
      param
    );
  }

  getAdminShipPage(page: number = 0): Observable<ShipPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl,
      null,
      true,
      param
    );
  }

  getAdminShip(id: number): Observable<Ship> {
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/${id}`,
      null,
      true,
      null
    );
  }

  saveAdminShip(ship: Ship): Observable<Ship> {
    return this.dataSource.sendRequest(
      'POST',
      this.serviceAdminUrl,
      ship,
      true,
      null
    );
  }

  updateAdminShip(shipId: number, ship: Ship): Observable<Ship> {
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceAdminUrl + `/${shipId}`,
      ship,
      true,
      null
    );
  }

  getAdminShipMap(shipId: number, startDate: string, endDate: string) {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.dataSource.sendRequest('GET', this.serviceAdminUrl + `/shipMap/${shipId}`, null, true, param);
  }

  updateAdminShipMap(shipId: number, date: string, value: boolean) {
    const param = new HttpParams().set('date', date).set('value', value ? 'true' : 'false');
    return this.dataSource.sendRequest('PUT', this.serviceAdminUrl + `/updateMap/${shipId}`, null, true, param);
  }

  // ****************************** ADMIN AGENT MODULES ***************************
  getAdminAgentShips(page: number = 0): Observable<ShipPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminAgentUrl,
      null,
      true,
      param
    );
  }

  // ****************************** SERVICE ADMIN MODULES ***************************
  getServiceAdminShips(): Observable<Ship[]> {
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + '/myShips',
      null,
      true,
      null
    );
  }

  // ****************************** SERVICE AGENT MODULES ***************************
  getServiceAgentShips(): Observable<Ship[]> {
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAgentUrl + '/myShips',
      null,
      true,
      null
    );
  }
}
