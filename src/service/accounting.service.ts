import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { AdminAgentLedgerPage } from 'src/shared/models/admin-agent-ledger.model';
import { AdminCashbookPage } from 'src/shared/models/admin-cashbook.model';
import { AdminShipLedgerPage } from 'src/shared/models/admin-ship-ledger.model';
import { ShipCashbookPage } from 'src/shared/models/ship-cashbook';

import { RestDataService } from './rest-data.service';
import { ShipAgentLedgerPage } from 'src/shared/models/ship-agent-ledger.model';
import { ShipAdminLedger } from 'src/shared/models/ship-admin-ledger.model';
import { ShipAdminCashbookPage } from 'src/shared/models/ship-admin-cashbook.model';

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
    const pageUrl = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/cashbook`,
      null,
      true,
      pageUrl
    );
  }

  //Get ship ledgerbook
  getAdminShipLedger(
    shipId: number,
    page: number = 0
  ): Observable<AdminShipLedgerPage> {
    const pageUrl = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/shipLedger/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  //get ShipAdmin Ledger
  getShipAdminLedger(
    adminId: number,
    page: number = 0
  ): Observable<ShipAdminLedger> {
    const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/shipAdminLedger/${adminId}`,
      null,
      true,
      param
    );
  }
  //Add service admin expense
  addAdminExpense(credit: number, explanation: string) {
    const pageUrl = `credit=${credit}&explanation=${explanation}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceAdminUrl + `/addExpense`,
      null,
      true,
      pageUrl
    );
  }

  //Add service admin expense
  addAdminIncome(credit: number, explanation: string) {
    const pageUrl = `credit=${credit}&explanation=${explanation}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceAdminUrl + `/addIncome`,
      null,
      true,
      pageUrl
    );
  }

  //Pay to ship
  payToShip(shipId: number, amount: number) {
    const pageUrl = `amount=${amount}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceAdminUrl + `/payShip/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  payToShipAdmin(adminId: number, amount: number) {
    const param = `amount=${amount}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Put,
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
    const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/adminAgentLedger/${agentId}`,
      null,
      true,
      param
    );
  }

  //Add Admin agent balance
  addAdminAgentBalance(agentId: number, amount: number): Observable<any> {
    const param = `amount=${amount}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceAdminUrl + `/addAgentBalance/${agentId}`,
      null,
      true,
      param
    );
  }
  // *********************************** Agent balance *******************************
  // Service agent ledger
  getAdminAgentMyLedger(page: number = 0): Observable<AdminAgentLedgerPage> {
    const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminAgentUrl + `/myLedger`,
      null,
      true,
      param
    );
  }

  //Service agent balance
  getAdminAgentBalance(): Observable<any> {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
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
    const pageUrl = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + `/shipAdminCashbook`,
      null,
      true,
      pageUrl
    );
  }

  getServiceAdminHotelswaveLedger(
    shipId: number,
    page: number = null
  ): Observable<AdminShipLedgerPage> {
    const pageUrl = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + `/hotelswaveLedger/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  addServiceAdminIncome(debit: number, explanation: string) {
    const pageUrl = `debit=${debit}&explanation=${explanation}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceServiceAdminUrl + `/addIncome`,
      null,
      true,
      pageUrl
    );
  }

  addServiceAdminExpense(credit: number, explanation: string) {
    const pageUrl = `credit=${credit}&explanation=${explanation}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceServiceAdminUrl + `/addExpense`,
      null,
      true,
      pageUrl
    );
  }

  getServiceAdminAgentLedger(
    userId: number,
    page: number = null
  ): Observable<ShipAgentLedgerPage> {
    const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + `/shipAgentLedger/${userId}`,
      null,
      true,
      param
    );
  }

  //Add agent balance
  // addServiceAdminAgentBalance(
  //   agentId: number,
  //   amount: number
  // ): Observable<any> {
  //   const param = `amount=${amount}&`;
  //   return this.dataSource.sendRequest(
  //     RequestMethod.Put,
  //     this.serviceServiceAdminUrl + `/addAgentBalance/${agentId}`,
  //     null,
  //     true,
  //     param
  //   );
  // }

  addServiceAdminAgentBalance(
    agentId,
    shipId,
    amount
  ): Observable<ShipAgentLedgerPage> {
    const param = `shipId=${shipId}&amount=${amount}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceServiceAdminUrl + `/addAgentBalance/${agentId}`,
      null,
      true,
      param
    );
  }
}
