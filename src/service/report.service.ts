import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { Report } from '../shared/models/report.model';
//import { RequestMethod } from '@angular/http';
import { ReportRange } from 'src/shared/models/report-range.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  serviceServiceAdminUrl = 'api/v1/serviceAdmin/reports';
  serviceAdminUrl = 'api/v1/admin/reports';

  constructor(private dataSource: RestDataService) { }

  // ************************** Admin modules ***********************************
  getAdminReservationReport(date: string): Observable<Report[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/reservation`,
      null,
      true,
      param
    );
  }

  getAdminReservationRangeReport(startDate: string, endDate: string): Observable<ReportRange[]> {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/reservationRange`,
      null,
      true,
      param
    );
  }

  getAdminSellsReport(date: string): Observable<Report[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/sells`,
      null,
      true,
      param
    );
  }

  getAdminSellsReportRange(startDate: string, endDate: string): Observable<ReportRange[]> {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/sellsRange`,
      null,
      true,
      param
    );
  }

  getAdminReservationReportByShipId(
    date: string,
    shipId: number
  ): Observable<Report[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/shipReservation/${shipId}`,
      null,
      true,
      param
    );
  }

  getAdminSellsReportByShipId(
    date: string,
    shipId: number
  ): Observable<Report[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/shipSells/${shipId}`,
      null,
      true,
      param
    );
  }

  getAdminAgentReport(shipId, userId, date: string): Observable<Report[]> {
    const param = new HttpParams().set('date', date).set('userId', userId);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/agentReport/${shipId}`,
      null,
      true,
      param
    );
  }

  getAdminSellsReportRangeForIndividual(shipId, userId, startDate, endDate): Observable<Report[]> {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('userId', userId);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/userSellsReportRange/${shipId}`,
      null,
      true,
      param
    );
  }

  getAdminReserveReportRangeForIndividual(shipId, userId, startDate, endDate): Observable<Report[]> {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('userId', userId);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/userReservationReportRange/${shipId}`,
      null,
      true,
      param
    );
  }

  getTicketCount(shipId, startDate, endDate) {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('shipId', shipId);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/countTicketReport/${shipId}`,
      null,
      true,
      param
    );
  }

  // ************************** Service Admin modules ***********************************

  getServiceAdminShipSells(shipId: number, date: string): Observable<Report[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/shipSells/${shipId}`,
      null,
      true,
      param
    );
  }

  getServiceAdminShipSellsRange(shipId: number, startDate: string, endDate: string): Observable<ReportRange[]> {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/shipSellsRange/${shipId}`,
      null,
      true,
      param
    );
  }

  getServiceAdminShipReservation(
    shipId: number,
    date: string
  ): Observable<Report[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/shipReservation/${shipId}`,
      null,
      true,
      param
    );
  }

  getServiceAdminShipReservationRange(shipId: number, startDate: string, endDate: string): Observable<ReportRange[]> {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/shipReservationRange/${shipId}`,
      null,
      true,
      param
    );
  }

  getServiceAdminBooking(
    shipId: number,
    date: string
  ): Observable<Report[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/bookingList/${shipId}`,
      null,
      true,
      param
    );
  }

  getServiceAdminDashboardReport(date: string): Observable<any> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl,
      null,
      true,
      param
    );
  }

  getShipAdminAgentReport(shipId, userId, date: string): Observable<Report[]> {
    const param = new HttpParams().set('date', date);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/agentReport/${shipId}`,
      null,
      true,
      param
    );
  }

  getShipAdminAgentReportRange(shipId, userId, startDate, endDate): Observable<Report[]> {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('userId', userId);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/agentReportRange/${shipId}`,
      null,
      true,
      param
    );
  }

  getServiceAdminSellsReportRangeForIndividual(shipId, userId, startDate, endDate): Observable<Report[]> {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('userId', userId);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/userSellsReportRange/${shipId}`,
      null,
      true,
      param
    );
  }

  getServiceAdminReserveReportRangeForIndividual(shipId, userId, startDate, endDate): Observable<Report[]> {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('userId', userId);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/userReservationReportRange/${shipId}`,
      null,
      true,
      param
    );
  }
}
