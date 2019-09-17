import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { RestDataService } from './rest-data.service';
import { User, UserPage } from 'src/shared/models/user.model';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { Ship } from 'src/shared/models/ship.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serviceUrl = 'api/v1/users';
  serviceAdminUrl = 'api/v1/admin/users';
  serviceServiceAdminUrl = 'api/v1/serviceAdmin/users';

  constructor(private dataSource: RestDataService, private router: Router) { }

  userRegistration(user: User): Observable<User> {
    // const em = user.email ? '&email=' + user.email : '';
    const param =
      'name=' +
      user.name +
      '&email=' +
      user.email +
      '&phoneNumber=' +
      user.phoneNumber +
      '&password=' +
      user.password;

    return this.dataSource.sendRequest(
      RequestMethod.Post,
      'register',
      null,
      false,
      param
    );
  }

  changePassword(userId: number, password: string): Observable<User> {
    const param = `password=${password}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceUrl + `/changePassword/${userId}`,
      null,
      true,
      param
    );
  }

  //*******************ADMIN MODULES **********************
  getAdminUsers(
    page: number = null,
    role: string = null
  ): Observable<UserPage> {
    const param =
      (page === null ? '' : `page=${page}&`) +
      (role === null ? '' : `role=${role}&`);
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl,
      null,
      true,
      param
    );
  }

  getAdminUser(userId: number) {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/${userId}`,
      null,
      true,
      null
    );
  }

  gerAdminUserListByShipId(shipId: number): Observable<User[]> {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/searchByShipId/${shipId}`,
      null,
      true,
      null
    );
  }

  getAdminShipListByUserId(userId: number): Observable<Ship[]> {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/getUserShipList/${userId}`,
      null,
      true,
      null
    );
  }

  createAdminUser(user: User): Observable<User> {
    return this.dataSource.sendRequest(
      RequestMethod.Post,
      this.serviceAdminUrl,
      user,
      true,
      null
    );
  }

  searchAdminUser(phone: string): Observable<User> {
    const param = `phone=${phone}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceAdminUrl + '/searchUser',
      null,
      true,
      param
    );
  }

  createAdminAgent(user: User): Observable<User> {
    return this.dataSource.sendRequest(
      RequestMethod.Post,
      this.serviceAdminUrl + '/createAgent',
      user,
      true,
      null
    );
  }

  changeAdminUserEnable(userId, status: boolean): Observable<User> {
    const param = 'enabled=' + status + '&';
    return this.dataSource.sendRequest(
      RequestMethod.Post,
      this.serviceAdminUrl + `/${userId}/access/toggle`,
      null,
      true,
      param
    );
  }

  changeAdminUserRole(userId, role: String): Observable<User> {
    const param = 'roles=' + role + '&';
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceAdminUrl + `/${userId}/changeRole`,
      null,
      true,
      param
    );
  }

  getAdminAgents(page: number = null): Observable<UserPage> {
    const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + '/myAgents',
      null,
      true,
      param
    );
  }

  removeAdminAgents(userId): Observable<User> {
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceAdminUrl + `/removeAgent/${userId}`,
      null,
      true,
      null
    );
  }

  changePasswordByAdmin(userId, password) {
    const param = `password=${password}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceAdminUrl + `/changeUserPassword/${userId}`,
      null,
      true,
      param
    );
  }

  assignAdminShip(userId: number, shipId: number, role: string) {
    const param = `shipId=${shipId}&role=${role}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Patch,
      this.serviceAdminUrl + `/assignShip/${userId}`,
      null,
      true,
      param
    );
  }

  assignAdminShipAgent(userId: number, shipId: number) {
    const param = `shipId=${shipId}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Patch,
      this.serviceAdminUrl + `/assignShipAgent/${userId}`,
      null,
      true,
      param
    );
  }

  assignAdminShipAdmin(userId: number, shipId: number) {
    const param = `shipId=${shipId}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Patch,
      this.serviceAdminUrl + `/assignShipAdmin/${userId}`,
      null,
      true,
      param
    );
  }

  //*******************SERVICE ADMIN MODULES **********************
  createSerivceAdminAgent(user: User): Observable<User> {
    return this.dataSource.sendRequest(
      RequestMethod.Post,
      this.serviceServiceAdminUrl + `/createAgent`,
      user,
      true,
      null
    );
  }

  getServiceAdminAgents(
    shipId: number,
    page: number = 0
  ): Observable<UserPage> {
    const pageUrl = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceServiceAdminUrl + `/myAgents/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  removeServiceAdminAgent(userId: number): Observable<User> {
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceServiceAdminUrl + `/removeAgent/${userId}`,
      null,
      true,
      null
    );
  }
}
