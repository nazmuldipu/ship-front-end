import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { Report } from '../shared/models/report.model';
import { RequestMethod } from '@angular/http';
import { ReportRange } from 'src/shared/models/report-range.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  serviceServiceAdminUrl = 'api/v1/serviceAdmin/reports';
  serviceAdminUrl = 'api/v1/admin/reports';

  constructor(private dataSource: RestDataService) { }

  // ************************** Admin modules ***********************************
  getAdminReservationReport(date: string): Observable<Report[]> {
    const pageUrl = `date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/reservation`,
      null,
      true,
      pageUrl
    );
  }

  getAdminReservationRangeReport(startDate: string, endDate: string): Observable<ReportRange[]> {
    const param = `startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/reservationRange`,
      null,
      true,
      param
    );
  }

  getAdminSellsReport(date: string): Observable<Report[]> {
    const pageUrl = `date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/sells`,
      null,
      true,
      pageUrl
    );
  }

  getAdminSellsReportRange(startDate: string, endDate: string): Observable<ReportRange[]> {
    const param = `startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
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
    const pageUrl = `date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/shipReservation/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  getAdminSellsReportByShipId(
    date: string,
    shipId: number
  ): Observable<Report[]> {
    const pageUrl = `date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/shipSells/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  getAdminAgentReport(shipId, userId, date: string): Observable<Report[]> {
    const pageUrl = `userId=${userId}&date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/agentReport/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  getAdminSellsReportRangeForIndividual(shipId, userId, startDate, endDate): Observable<Report[]> {
    const pageUrl = `userId=${userId}&startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/userSellsReportRange/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  getAdminReserveReportRangeForIndividual(shipId, userId, startDate, endDate): Observable<Report[]> {
    const pageUrl = `userId=${userId}&startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/userReservationReportRange/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  getTicketCount(shipId, startDate, endDate) {
    const pageUrl = `shipId=${shipId}&startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/countTicketReport/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  // ************************** Service Admin modules ***********************************

  getServiceAdminShipSells(shipId: number, date: string): Observable<Report[]> {
    const param = `date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + `/shipSells/${shipId}`,
      null,
      true,
      param
    );
  }

  getServiceAdminShipSellsRange(shipId: number, startDate: string, endDate: string): Observable<ReportRange[]> {
    const param = `startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
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
    const param = `date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + `/shipReservation/${shipId}`,
      null,
      true,
      param
    );
  }

  getServiceAdminShipReservationRange(shipId: number, startDate: string, endDate: string): Observable<ReportRange[]> {
    const param = `startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
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
    const param = `date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + `/bookingList/${shipId}`,
      null,
      true,
      param
    );
  }

  getServiceAdminDashboardReport(date: string): Observable<any> {
    const param = `date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl,
      null,
      true,
      param
    );
  }

  getShipAdminAgentReport(shipId, userId, date: string): Observable<Report[]> {
    const pageUrl = `userId=${userId}&date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + `/agentReport/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  getShipAdminAgentReportRange(shipId, userId, startDate, endDate): Observable<Report[]> {
    const pageUrl = `userId=${userId}&startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + `/agentReportRange/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  getServiceAdminSellsReportRangeForIndividual(shipId, userId, startDate, endDate): Observable<Report[]> {
    const pageUrl = `userId=${userId}&startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + `/userSellsReportRange/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  getServiceAdminReserveReportRangeForIndividual(shipId, userId, startDate, endDate): Observable<Report[]> {
    const pageUrl = `userId=${userId}&startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + `/userReservationReportRange/${shipId}`,
      null,
      true,
      pageUrl
    );
  }
}
