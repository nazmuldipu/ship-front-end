import { Injectable } from '@angular/core';
//import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { AdminAgentLedgerPage } from 'src/shared/models/admin-agent-ledger.model';
import { AdminCashbookPage } from 'src/shared/models/admin-cashbook.model';
import { AdminShipLedgerPage } from 'src/shared/models/admin-ship-ledger.model';
import { ShipCashbookPage } from 'src/shared/models/ship-cashbook';

import { RestDataService } from './rest-data.service';
import { ShipAgentLedgerPage, ShipAgentLedger } from 'src/shared/models/ship-agent-ledger.model';
import { ShipAdminLedger, ShipAdminLedgerPage } from 'src/shared/models/ship-admin-ledger.model';
import { ShipAdminCashbookPage } from 'src/shared/models/ship-admin-cashbook.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  serviceAdminUrl = 'api/v1/admin/accounting';
  serviceServiceAdminUrl = 'api/v1/serviceAdmin/accounting';
  serviceServiceAgentUrl = 'api/v1/serviceAgent/accounting';
  serviceAdminAgentUrl = 'api/v1/adminAgent/accounting';

  constructor(private dataSource: RestDataService) { }

  // ****************************** Admin Modules *****************************************
  //get admin cashbook
  getAdminCashbook(page: number = 0): Observable<AdminCashbookPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/cashbook`,
      null,
      true,
      param
    );
  }

  //Get ship ledgerbook
  getAdminShipLedger(
    shipId: number,
    page: number = 0
  ): Observable<AdminShipLedgerPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/shipLedger/${shipId}`,
      null,
      true,
      param
    );
  }

  //get ShipAdmin Ledger
  getShipAdminLedger(
    adminId: number,
    page: number = 0
  ): Observable<ShipAdminLedger> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/shipAdminLedger/${adminId}`,
      null,
      true,
      param
    );
  }
  //Add service admin expense
  addAdminExpense(credit: number, explanation: string) {
    const param = new HttpParams().set('credit', credit.toString()).set('explanation', explanation);
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceAdminUrl + `/addExpense`,
      null,
      true,
      param
    );
  }

  //Add service admin expense
  addAdminIncome(debit: number, explanation: string) {
    const param = new HttpParams().set('debit', debit.toString()).set('explanation', explanation);
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceAdminUrl + `/addIncome`,
      null,
      true,
      param
    );
  }

  //Pay to ship
  payToShip(shipId: number, amount: number) {
    const param = new HttpParams().set('amount', amount.toString());
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceAdminUrl + `/payShip/${shipId}`,
      null,
      true,
      param
    );
  }

  payToShipAdmin(adminId: number, amount: number) {
    const param = new HttpParams().set('amount', amount.toString());
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceAdminUrl + `/payShipAdmin/${adminId}`,
      null,
      true,
      param
    );
  }

  // Admin agent ledger
  getAdminAgentLedgerByAdmin(
    agentId: number,
    page: number = 0
  ): Observable<AdminAgentLedgerPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/adminAgentLedger/${agentId}`,
      null,
      true,
      param
    );
  }

  //Add Admin agent balance
  addAdminAgentBalance(agentId: number, amount: number): Observable<any> {
    const param = new HttpParams().set('amount', amount.toString());
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceAdminUrl + `/addAgentBalance/${agentId}`,
      null,
      true,
      param
    );
  }
  // *********************************** Agent balance *******************************
  // Service agent ledger
  getAdminAgentMyLedger(page: number = 0): Observable<AdminAgentLedgerPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminAgentUrl + `/myLedger`,
      null,
      true,
      param
    );
  }

  //Service agent balance
  getAdminAgentBalance(): Observable<any> {
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminAgentUrl + `/myBalance`,
      null,
      true,
      null
    );
  }

  // ****************************** Service Admin Modules *****************************************

  //get admin cashbook
  getShipAdminCashbook(
    page: number = null
  ): Observable<ShipAdminCashbookPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/shipAdminCashbook`,
      null,
      true,
      param
    );
  }

  getServiceAdminHotelswaveLedger(
    page: number = null
  ): Observable<ShipAdminLedgerPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/hotelswaveLedger`,
      null,
      true,
      param
    );
  }

  addServiceAdminIncome(debit: number, explanation: string) {
    const param = new HttpParams().set('debit', debit.toString());
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceServiceAdminUrl + `/addIncome`,
      null,
      true,
      param
    );
  }

  addServiceAdminExpense(credit: number, explanation: string) {
    const param = new HttpParams().set('credit', credit.toString()).set('explanation', explanation);
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceServiceAdminUrl + `/addExpense`,
      null,
      true,
      param
    );
  }

  getServiceAdminAgentLedger(
    userId: number,
    page: number = null
  ): Observable<ShipAgentLedgerPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/shipAgentLedger/${userId}`,
      null,
      true,
      param
    );
  }

  addServiceAdminAgentBalance(
    agentId,
    amount
  ): Observable<ShipAgentLedger> {
    const param = new HttpParams().set('amount', amount.toString());
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceServiceAdminUrl + `/addAgentBalance/${agentId}`,
      null,
      true,
      param
    );
  }

  // // ****************************** Service Admin Agent modules *****************************************
  getServiceAdminAgentBalance(): Observable<any> {
    return this.dataSource.sendRequest('GET', this.serviceServiceAgentUrl + `/myBalance`, null, true, null);
  }

  getShipAdminAgentLedger(page: number = null): Observable<ShipAgentLedger[]> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest('GET', this.serviceServiceAgentUrl + `/myLedger`, null, true, param);
  }
}
