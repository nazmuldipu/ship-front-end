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
  serviceAdminAgentUrl = 'api/v1/adminAgent/booking';
  serviceServiceAdminUrl = 'api/v1/serviceAdmin/booking';
  serviceServiceAgentUrl = 'api/v1/serviceAgent/booking';

  constructor(private dataSource: RestDataService) { }

  // GET add bookings
  getAdminBookings(page: number = 0): Observable<BookingPage> {
    const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl,
      null,
      true,
      param
    );
  }

  getAdminBooking(bookingId: number): Observable<Booking> {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/${bookingId}`,
      null,
      true,
      null
    );
  }
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

  confirmAdminReservation(bookingId): Observable<Booking> {
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceAdminUrl + `/confirmReservation/${bookingId}`,
      null,
      true,
      null
    );
  }

  getAdminMySells(page: number = 0): Observable<BookingPage> {
    const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + '/mySells',
      null,
      true,
      param
    );
  }

  cancelAdminBooking(bookindId: number): Observable<any> {
    return this.dataSource.sendRequest(
      RequestMethod.Delete,
      this.serviceAdminUrl + `/cancelBooking/${bookindId}`,
      null,
      true,
      null
    );
  }

  cancelAdminReservation(bookindId: number): Observable<any> {
    return this.dataSource.sendRequest(
      RequestMethod.Delete,
      this.serviceAdminUrl + `/cancelReservation/${bookindId}`,
      null,
      true,
      null
    );
  }

  // ****************************** ADMIN AGENT MODULES *****************************
  createAdminAgentBooking(booking: Booking): Observable<Booking> {
    return this.dataSource.sendRequest(
      RequestMethod.Post,
      this.serviceAdminAgentUrl + `/sell`,
      booking,
      true,
      null
    );
  }

  getAdminAgentMySells(page: number = 0): Observable<BookingPage> {
    const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminAgentUrl + '/mySells',
      null,
      true,
      param
    );
  }

  // ****************************** SERVICE ADMIN MODULES ***************************
  createServiceAdminBooking(booking: Booking): Observable<Booking> {
    return this.dataSource.sendRequest(
      RequestMethod.Post,
      this.serviceServiceAdminUrl + `/sell`,
      booking,
      true,
      null
    );
  }

  getServiceAdminBooking(bookingId: number): Observable<Booking> {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + `/${bookingId}`,
      null,
      true,
      null
    );
  }

  cancelServiceAdminBooking(bookindId: number): Observable<any> {
    return this.dataSource.sendRequest(
      RequestMethod.Delete,
      this.serviceServiceAdminUrl + `/cancelBooking/${bookindId}`,
      null,
      true,
      null
    );
  }

  cancelServiceAdminReservation(bookindId: number): Observable<any> {
    return this.dataSource.sendRequest(
      RequestMethod.Delete,
      this.serviceServiceAdminUrl + `/cancelReservation/${bookindId}`,
      null,
      true,
      null
    );
  }

  confirmServiceAdminReservation(bookingId): Observable<Booking> {
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceServiceAdminUrl + `/confirmReservation/${bookingId}`,
      null,
      true,
      null
    );
  }

  // ****************************** SERVICE ADMIN MODULES ***************************
  createServiceAgentBooking(booking: Booking): Observable<Booking> {
    return this.dataSource.sendRequest(
      RequestMethod.Post,
      this.serviceServiceAgentUrl + `/sell`,
      booking,
      true,
      null
    );
  }

  getServiceAgentMySells(page: number = 0): Observable<BookingPage> {
    const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAgentUrl + '/mySells',
      null,
      true,
      param
    );
  }
}
