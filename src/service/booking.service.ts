import { Injectable } from '@angular/core';
import { RestDataService } from 'src/service/rest-data.service';
import { Booking, BookingPage } from 'src/shared/models/booking.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpParams } from '@angular/common/http';
//import { RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  serviceUrl = 'api/v1/booking';
  adminUrl = 'api/v1/admin/booking';
  agentUrl = 'api/v1/adminAgent/booking';
  serviceAdminUrl = 'api/v1/serviceAdmin/booking';
  serviceAgentUrl = 'api/v1/serviceAgent/booking';

  constructor(private dataSource: RestDataService) { }

  // GET add bookings
  getAdminBookings(page: number = 0): Observable<BookingPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.adminUrl,
      null,
      true,
      param
    );
  }

  getAdminBooking(bookingId: number): Observable<Booking> {
    return this.dataSource.sendRequest(
      'GET',
      this.adminUrl + `/${bookingId}`,
      null,
      true,
      null
    );
  }
  //Create booking
  createAdminBooking(booking: Booking): Observable<Booking> {
    return this.dataSource.sendRequest(
      'POST',
      this.adminUrl + `/sell`,
      booking,
      true,
      null
    );
  }

  confirmAdminReservation(bookingId): Observable<Booking> {
    return this.dataSource.sendRequest(
      'PUT',
      this.adminUrl + `/confirmReservation/${bookingId}`,
      null,
      true,
      null
    );
  }

  getAdminMySells(page: number = 0): Observable<BookingPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.adminUrl + '/mySells',
      null,
      true,
      param
    );
  }

  cancelAdminBooking(bookindId: number): Observable<any> {
    return this.dataSource.sendRequest(
      'DELETE',
      this.adminUrl + `/cancelBooking/${bookindId}`,
      null,
      true,
      null
    );
  }

  cancelAdminReservation(bookindId: number): Observable<any> {
    return this.dataSource.sendRequest(
      'DELETE',
      this.adminUrl + `/cancelReservation/${bookindId}`,
      null,
      true,
      null
    );
  }

  // ****************************** ADMIN AGENT MODULES *****************************
  createAdminAgentBooking(booking: Booking): Observable<Booking> {
    return this.dataSource.sendRequest(
      'POST',
      this.agentUrl + `/sell`,
      booking,
      true,
      null
    );
  }

  getAdminAgentMySells(page: number = 0): Observable<BookingPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.agentUrl + '/mySells',
      null,
      true,
      param
    );
  }

  // ****************************** SERVICE ADMIN MODULES ***************************
  createServiceAdminBooking(booking: Booking): Observable<Booking> {
    return this.dataSource.sendRequest(
      'POST',
      this.serviceAdminUrl + `/sell`,
      booking,
      true,
      null
    );
  }

  getServiceAdminBooking(bookingId: number): Observable<Booking> {
    return this.dataSource.sendRequest('GET', this.serviceAdminUrl + `/${bookingId}`, null, true, null);
  }

  cancelServiceAdminBooking(bookindId: number): Observable<any> {
    return this.dataSource.sendRequest('DELETE', this.serviceAdminUrl + `/cancelBooking/${bookindId}`, null, true, null);
  }

  cancelServiceAdminReservation(bookindId: number): Observable<any> {
    return this.dataSource.sendRequest('DELETE', this.serviceAdminUrl + `/cancelReservation/${bookindId}`, null, true, null);
  }

  cancelServiceAdminReservationSeats(seatIds: number[], bookingId: number): Observable<any> {
    const param = new HttpParams().set('seatIds', seatIds.toString());
    return this.dataSource.sendRequest(
      'DELETE',
      this.serviceAdminUrl + `/cancelReservationSeats/${bookingId}`,
      null,
      true,
      param
    );
  }

  cancelServiceAdminBookingSeats(seatIds: number[], bookingId: number): Observable<any> {
    const param = new HttpParams().set('seatIds', seatIds.toString());
    return this.dataSource.sendRequest(
      'DELETE',
      this.serviceAdminUrl + `/cancelBookingSeats/${bookingId}`,
      null,
      true,
      param
    );
  }

  confirmServiceAdminReservation(bookingId): Observable<Booking> {
    return this.dataSource.sendRequest('PUT', this.serviceAdminUrl + `/confirmReservation/${bookingId}`, null, true, null);
  }

  // ****************************** SERVICE Agent MODULES ***************************
  createServiceAgentBooking(booking: Booking): Observable<Booking> {
    return this.dataSource.sendRequest('POST', this.serviceAgentUrl + `/sell`, booking, true, null);
  }

  getServiceAgentMySells(page: number = 0): Observable<BookingPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest('GET', this.serviceAgentUrl + '/mySells', null, true, param);
  }

  getServiceAgentBooking(bookingId: number): Observable<Booking> {
    return this.dataSource.sendRequest('GET', this.serviceAgentUrl + `/${bookingId}`, null, true, null);
  }

  cancelServiceAgentBooking(bookindId: number): Observable<any> {
    return this.dataSource.sendRequest('DELETE', this.serviceAgentUrl + `/cancelBooking/${bookindId}`, null, true, null);
  }

  cancelServiceAgentReservation(bookindId: number): Observable<any> {
    return this.dataSource.sendRequest('DELETE', this.serviceAgentUrl + `/cancelReservation/${bookindId}`, null, true, null);
  }

  confirmServiceAgentReservation(bookingId): Observable<Booking> {
    return this.dataSource.sendRequest('PUT', this.serviceAgentUrl + `/confirmReservation/${bookingId}`, null, true, null);
  }
}
