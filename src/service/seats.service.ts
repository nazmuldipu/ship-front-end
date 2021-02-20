import { Injectable } from '@angular/core';
//import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import { Seat, SeatPage } from 'src/shared/models/seat.model';

import { RestDataService } from './rest-data.service';
import { SeatStatusList } from 'src/shared/models/booking.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  serviceUrl = 'api/v1/seats';
  adminUrl = 'api/v1/admin/seats';
  agentUrl = 'api/v1/adminAgent/seats';
  serviceAdminUrl = 'api/v1/serviceAdmin/seats';
  serviceAgentUrl = 'api/v1/serviceAgent/seats';

  constructor(private dataSource: RestDataService) { }

  saveAdminSeat(seat: Seat, shipId: number): Observable<Seat> {
    return this.dataSource.sendRequest(
      'POST',
      this.adminUrl + `/${shipId}`,
      seat,
      true,
      null
    );
  }

  updateAdminSeat(
    seat: Seat,
    shipId: number,
    seatId: number
  ): Observable<Seat> {
    return this.dataSource.sendRequest(
      'PUT',
      this.adminUrl + `/update/${shipId}/${seatId}`,
      seat,
      true,
      null
    );
  }

  getAdminSeatPageByShiplId(
    shipId: number,
    page: number
  ): Observable<SeatPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.adminUrl + `/all/${shipId}`,
      null,
      true,
      param
    );
  }

  getAdminSeatListByShiplId(shipId: number): Observable<Seat[]> {
    return this.dataSource.sendRequest(
      'GET',
      this.adminUrl + `/list/${shipId}`,
      null,
      true,
      null
    );
  }

  getAdminSeatListByCategoryId(categoryId: number): Observable<Seat[]> {
    return this.dataSource.sendRequest(
      'GET',
      this.adminUrl + `/listByCategory/${categoryId}`,
      null,
      true,
      null
    );
  }

  getAdminAvailableSeatListByShiplId(
    shipId: number,
    date: string
  ): Observable<Seat[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.adminUrl + `/available/${shipId}`,
      null,
      true,
      param
    );
  }
  getAdminSeatStatusListByShiplId(
    shipId: number,
    date: string
  ): Observable<SeatStatusList[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.adminUrl + `/statusList/${shipId}`,
      null,
      true,
      param
    );
  }
  getAdminSeatPriceMapBySeatId(
    seatId: number,
    startDate: string,
    endDate: string
  ): Observable<SeatPage> {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.dataSource.sendRequest(
      'GET',
      this.adminUrl + `/priceMap/${seatId}`,
      null,
      true,
      param
    );
  }

  // ****************************** ADMIN AGENT MODULES ***************************
  getAdminAgentAvailableSeatListByShiplId(shipId, date): Observable<Seat[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.agentUrl + `/available/${shipId}`,
      null,
      true,
      param
    );
  }

  getAdminAgentSeatStatusListByShiplId(
    shipId: number,
    date: string
  ): Observable<SeatStatusList[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.agentUrl + `/statusList/${shipId}`,
      null,
      true,
      param
    );
  }

  // ****************************** SERVICE ADMIN MODULES ***************************
  getServiceAdminAvailableSeatListByShiplId(shipId, date): Observable<Seat[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest('GET', this.serviceAdminUrl + `/available/${shipId}`, null, true, param);
  }

  getServiceAdminSeatStatusListByShiplId(shipId: number, date: string): Observable<SeatStatusList[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest('GET', this.serviceAdminUrl + `/statusList/${shipId}`, null, true, param);
  }

  // ****************************** SERVICE AGENT MODULES ***************************
  getServiceAgentAvailableSeatListByShiplId(shipId, date): Observable<Seat[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest('GET', this.serviceAgentUrl + `/available/${shipId}`, null, true, param);
  }

  getServiceAgentSeatStatusListByShiplId(shipId: number, date: string): Observable<SeatStatusList[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest('GET', this.serviceAgentUrl + `/statusList/${shipId}`, null, true, param);
  }
}
