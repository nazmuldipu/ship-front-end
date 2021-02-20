import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/shared/models/user.model';

import { RestDataService } from './rest-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  authorities = [];
  errorMessage = '';

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private datasource: RestDataService,
    private Cookie: CookieService
  ) {
    if (this.isAuthenticated()) {
      this.user = JSON.parse(Cookie.get('user'));
      this.authorities = JSON.parse(Cookie.get('authorities'));
    }
  }

  getUserId(): number {
    return this.user.id;
  }

  getUsername(): string {
    return this.user.name;
  }

  getUserPhone(): string {
    return this.user.phoneNumber;
  }

  getCurrentUser(): User {
    return this.user;
  }

  isAuthenticated(): boolean {
    const access_token = this.Cookie.get('access_token');
    const refresh_token = this.Cookie.get('refresh_token');
    if (!access_token && !!refresh_token && this.datasource.urlFlag) {
      this.getAccessTokenByRefreshToken();
      return false;
    }
    return !!access_token;
  }

  getAccessTokenByRefreshToken() {
    this.datasource.obtainAccessTokenByRefreshToken();
    // this.router.navigateByUrl('/dashboard/index');
  }

  getAccessToken() {
    return this.Cookie.get('access_token');
  }
  getAuthorities(): any {
    return this.authorities;
  }
  hasRole(role: string): boolean {
    return this.authorities.includes(role);
  }
  hasAuthorities(authority: string): boolean {
    // if (this.isAdmin()) return true;

    return this.authorities.includes(authority);
  }

  isAdmin(): boolean {
    return this.authorities.includes('ROLE_ADMIN');
  }
  isServiceAdmin() {
    return this.authorities.includes('ROLE_SERVICE_ADMIN');
  }
  isAgent(): boolean {
    return this.authorities.includes('ROLE_AGENT');
  }
  isUser(): boolean {
    return this.authorities.includes('ROLE_USER');
  }

  authenticate(username: string, password: string): Observable<any> {
    this.errorMessage = '';
    let returnUrl =
      this.activeRoute.snapshot.queryParamMap.get('returnUrl') || '/dashboard';
    localStorage.setItem('returnUrl', returnUrl);

    return this.datasource
      .obtainAccessToken(username, password);
    // .pipe(map(res => res.json()));
    // .subscribe(
    //   data => {
    //     this.saveToken(data, '');
    //   },
    //   err => this.loginErrorHandler(err)
    // );
  }

  saveToken(data, url) {
    const value = {
      name: data.name,
      username: data.username,
      id: data.id,
      phoneNumber: data.phone,
      canReserve: data.canReserve,
      canCancelReservation: data.canCancelReservation,
      canCancelBooking: data.canCancelBooking,
    } as User;
    // Save username and roles
    this.user = value;

    this.authorities = [];
    for (let i = 0; i < data.authorities.length; i++) {
      this.authorities.push(data.authorities[i].authority);
    }

    const exDate = new Date();
    exDate.setTime(exDate.getTime() + data.expires_in * 1000);
    this.Cookie.put('access_token', data.access_token, { expires: exDate });
    exDate.setTime(exDate.getTime() + 14 * 24 * 60 * 60 * 1000); // set refresh token for one day
    this.Cookie.put('refresh_token', data.refresh_token, { expires: exDate });
    this.Cookie.putObject('user', this.user, { expires: exDate });
    this.Cookie.putObject('authorities', this.authorities, { expires: exDate });
    let returnUrl = localStorage.getItem('returnUrl');
    // this.getUserCart(data.id);
    this.router.navigateByUrl(returnUrl);
  }

  // async getUserCart(userId: number) {
  //   await this.bookingService.getMyCart(userId).subscribe(data => {
  //     // console.log('Cart : ', data);
  //     this.bookingService.cart = data as Booking;
  //     // let total = 0;
  //     // if (data.roomList != null && data.roomList.length > 0) {
  //     //   this.bookingService.cart.roomList.forEach(room => {
  //     //     total += room.price;
  //     //   });
  //     // }
  //     // this.bookingService.cart.total = total;
  //     this.bookingService._cartSource.next(data);
  //   });
  // }

  clear() {
    this.Cookie.removeAll();
    localStorage.clear();
    this.user = null;
    this.authorities = [];
    this.router.navigateByUrl('/login');
  }

  loginErrorHandler(err) {
    this.errorMessage = 'Invalid username or password';
    console.log('Invalid username or password')
    this.router.navigate(['/login']);
  }
}
