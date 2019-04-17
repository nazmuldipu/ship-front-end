import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import { Seat, SeatPage } from 'src/shared/models/seat.model';

import { RestDataService } from './rest-data.service';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  serviceUrl = '/api/v1/seats';
  serviceAdminUrl = '/api/v1/admin/seats';

  constructor(private dataSource: RestDataService) {}

  saveAdminSeat(seat: Seat, shipId: number): Observable<Seat> {
    return this.dataSource.sendRequest(
      RequestMethod.Post,
      this.serviceAdminUrl + `/${shipId}`,
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
      RequestMethod.Put,
      this.serviceAdminUrl + `/update/${shipId}/${seatId}`,
      seat,
      true,
      null
    );
  }

  getAdminSeatPageByShiplId(
    shipId: number,
    page: number
  ): Observable<SeatPage> {
    const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/all/${shipId}`,
      null,
      true,
      param
    );
  }

  getAdminSeatListByShiplId(shipId: number): Observable<Seat[]> {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/list/${shipId}`,
      null,
      true,
      null
    );
  }

  getAdminSeatListByCategoryId(categoryId: number): Observable<Seat[]> {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/listByCategory/${categoryId}`,
      null,
      true,
      null
    );
  }

  getAdminAvailableSeatListByShiplId(
    shipId: number,
    categoryId: number,
    date: string
  ): Observable<SeatPage> {
    const param = `categoryId=${categoryId}&date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/available/${shipId}`,
      null,
      true,
      param
    );
  }
  getAdminSeatStatusListByShiplId(
    shipId: number,
    date: string
  ): Observable<SeatPage> {
    const param = `date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/statusList/${shipId}`,
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
    const param = `startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/priceMap/${seatId}`,
      null,
      true,
      param
    );
  }
}
