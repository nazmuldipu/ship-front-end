import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { RestDataService } from './rest-data.service';
import { User, UserPage } from 'src/shared/models/user.model';
//import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { Ship } from 'src/shared/models/ship.model';
import { HttpParams } from '@angular/common/http';

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
    const param = new HttpParams()
      .set('name', user.name)
      .set('email', user.email)
      .set('phoneNumber', user.phoneNumber)
      .set('password', user.password);
    return this.dataSource.sendRequest(
      'POST',
      'register',
      null,
      false,
      param
    );
  }

  changePassword(userId: number, password: string): Observable<User> {
    const param = new HttpParams()
      .set('password', password);
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceUrl + `/changePassword/${userId}`,
      null,
      true,
      param
    );
  }

  findByUsernameOrPhoneNumber(query: string, role: string = null, page: number = 0): Observable<UserPage> {
    let param = new HttpParams().set('page', page.toString())
    if (query) {
      param = param.set('query', query);
    }
    if (role) {
      param = param.set('role', role);
    }

    return this.dataSource.sendRequest('PUT', this.serviceAdminUrl + `/searchUser`, null, true, param);
  }

  //*******************ADMIN MODULES **********************
  getAdminUsers(page: number = 0, role: string = null): Observable<UserPage> {
    let param = new HttpParams()
      .set('page', page.toString())

    if (role) {
      param = param.set('role', role);
    }

    return this.dataSource.sendRequest('GET', this.serviceAdminUrl, null, true, param);
  }

  getAdminUser(userId: number) {
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/${userId}`,
      null,
      true,
      null
    );
  }

  getAdminUserByRole(role: string): Observable<User[]> {
    const param = new HttpParams()
      .set('role', role);
    return this.dataSource.sendRequest('GET', this.serviceAdminUrl + '/byRole', null, true, param);
  }

  getAllShipAdminList(page: number = 0): Observable<UserPage> {
    const param = new HttpParams()
      .set('page', page.toString());
    // const param = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest('GET', this.serviceAdminUrl + '/getShipAdminList', null, true, param);
  }

  gerAdminUserListByShipId(shipId: number): Observable<User[]> {
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/searchByShipId/${shipId}`,
      null,
      true,
      null
    );
  }

  getAdminShipListByUserId(userId: number): Observable<Ship[]> {
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/getUserShipList/${userId}`,
      null,
      true,
      null
    );
  }

  createAdminUser(user: User): Observable<User> {
    return this.dataSource.sendRequest(
      'POST',
      this.serviceAdminUrl,
      user,
      true,
      null
    );
  }

  // searchAdminUser(phone: string): Observable<User> {
  //   const param = new HttpParams().set('phone', phone);

  //   return this.dataSource.sendRequest(
  //     'PUT',
  //     this.serviceAdminUrl + '/searchUser',
  //     null,
  //     true,
  //     param
  //   );
  // }

  createAdminAgent(user: User): Observable<User> {
    return this.dataSource.sendRequest(
      'POST',
      this.serviceAdminUrl + '/createAgent',
      user,
      true,
      null
    );
  }

  changeAdminUserEnable(userId, status: boolean): Observable<User> {
    const param = new HttpParams().set('enabled', status ? 'true' : 'false');
    return this.dataSource.sendRequest(
      'POST',
      this.serviceAdminUrl + `/${userId}/access/toggle`,
      null,
      true,
      param
    );
  }

  changeAdminUserRole(userId, role: string): Observable<User> {
    const param = new HttpParams().set('roles', role);
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceAdminUrl + `/${userId}/changeRole`,
      null,
      true,
      param
    );
  }

  getAdminAgents(page: number = 0): Observable<UserPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + '/myAgents',
      null,
      true,
      param
    );
  }

  removeAdminAgents(userId): Observable<User> {
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceAdminUrl + `/removeAgent/${userId}`,
      null,
      true,
      null
    );
  }

  changePasswordByAdmin(userId, password) {
    const param = new HttpParams().set('password', password);

    return this.dataSource.sendRequest(
      'PUT',
      this.serviceAdminUrl + `/changeUserPassword/${userId}`,
      null,
      true,
      param
    );
  }

  assignAdminShip(userId: number, shipId: number, role: string) {
    const param = new HttpParams().set('shipId', shipId.toString()).set('role', role);

    return this.dataSource.sendRequest(
      'PATCH',
      this.serviceAdminUrl + `/assignShip/${userId}`,
      null,
      true,
      param
    );
  }

  assignAdminShipAgent(userId: number, shipId: number) {
    const param = new HttpParams().set('shipId', shipId.toString());
    return this.dataSource.sendRequest(
      'PATCH',
      this.serviceAdminUrl + `/assignShipAgent/${userId}`,
      null,
      true,
      param
    );
  }

  assignAdminShipAdmin(userId: number, shipId: number) {
    const param = new HttpParams().set('shipId', shipId.toString());
    return this.dataSource.sendRequest(
      'PATCH',
      this.serviceAdminUrl + `/assignShipAdmin/${userId}`,
      null,
      true,
      param
    );
  }

  //*******************SERVICE ADMIN MODULES **********************

  getServiceAdminUserByRole(role: string): Observable<User[]> {
    const param = new HttpParams().set('role', role);
    return this.dataSource.sendRequest('GET', this.serviceServiceAdminUrl + '/byRole', null, true, param);
  }

  createSerivceAdminAgent(user: User): Observable<User> {
    return this.dataSource.sendRequest(
      'POST',
      this.serviceServiceAdminUrl + `/createAgent`,
      user,
      true,
      null
    );
  }

  getServiceAdminAgents(page: number = 0): Observable<UserPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceServiceAdminUrl + `/myAgents/`,
      null,
      true,
      param
    );
  }

  removeServiceAdminAgent(userId: number): Observable<User> {
    return this.dataSource.sendRequest(
      'PUT',
      this.serviceServiceAdminUrl + `/removeAgent/${userId}`,
      null,
      true,
      null
    );
  }
}
