import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Observable } from 'rxjs';
import { AdminCashbookPage } from 'src/shared/models/admin-cashbook.model';
import { AdminShipLedgerPage } from 'src/shared/models/admin-ship-ledger.model';
import { AdminAgentLedgerPage } from 'src/shared/models/admin-agent-ledger.model';
import { RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  serviceAdminUrl = 'api/v1/admin/accounting';
  serviceServiceAdminUrl = 'api/v1/serviceAdmin/accounting';
  serviceServiceAgentUrl = 'api/v1/serviceAgent/accounting';
  serviceAdminAgentUrl = 'api/v1/adminAgent/accounting';

  constructor(private dataSource: RestDataService) {}

  // ****************************** Admin cashbook *****************************************
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
}
