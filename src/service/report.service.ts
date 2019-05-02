import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { Report } from '../shared/models/report.model';
import { RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  serviceServiceAdminUrl = 'api/v1/serviceAdmin/reports';
  serviceAdminUrl = 'api/v1/admin/reports';

  constructor(private dataSource: RestDataService) {}

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
}
