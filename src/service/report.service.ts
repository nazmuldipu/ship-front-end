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
    hotelId: number
  ): Observable<Report[]> {
    const pageUrl = `date=${date}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/shipSells/${hotelId}`,
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
}
