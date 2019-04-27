import { Injectable } from '@angular/core';
import { RestDataService } from 'src/service/rest-data.service';
import { Booking, BookingPage } from 'src/shared/models/booking.model';
import { Observable } from 'rxjs/internal/Observable';
import { RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  serviceUrl = 'api/v1/booking';
  serviceAdminUrl = 'api/v1/admin/booking';

  constructor(private dataSource: RestDataService) {}

  //Create booking
  createAdminBooking(booking: Booking): Observable<Booking> {
    return this.dataSource.sendRequest(
      RequestMethod.Post,
      this.serviceAdminUrl + `/sell`,
      booking,
      true,
      null
    );
  }

  getAdminMySells(page: number = 0): Observable<BookingPage> {
    const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Post,
      this.serviceAdminUrl + '/mySells',
      null,
      true,
      param
    );
  }
}
