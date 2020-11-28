import { map, tap, take, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  Headers,
  HttpClient,
  Request,
  RequestMethod,
  RequestOptions
} from '@angular/http';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestDataService {
  urlFlag = true;
  baseUrl: string;
  auth_token: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private Cookie: CookieService // private oauthService: OAuthService
  ) {
    this.baseUrl = `${environment.PROTOCOL}://${environment.SERVER}${
      environment.PORT
      }/`;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  obtainAccessToken(user: string, pass: string): Observable<any> {
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('client_id', environment.client_id);
    params.append('client_secret', environment.client_secret);
    params.append('username', user);
    params.append('password', pass);

    const url = this.baseUrl + 'oauth/token?' + params.toString();
    return this.http.post(url, null).pipe(
      map(ref => {
        return ref;
      })
    );
  }

  async obtainAccessTokenByRefreshToken() {
    /*
     * Using urlFlag as a semaphorse for exclusive execution.
     * whenever access token expires all method who are using access_token will
     * hit this method. but this will execute only once;
     */
    if (this.urlFlag) {
      this.urlFlag = false;
      // console.log('obtaining access token by refresh token');
      const params = new URLSearchParams();
      params.append('grant_type', 'refresh_token');
      params.append('refresh_token', this.Cookie.get('refresh_token'));
      params.append('client_id', environment.client_id);
      params.append('client_secret', environment.client_secret);

      const url = this.baseUrl + 'oauth/token?' + params.toString();
      await this.http
        .get(url, null)
        .pipe(map(res => res.json()))
        .subscribe(
          data => {
            this.saveToken(data);

            window.location.reload();
            // console.lo
            this.urlFlag = true;
          },
          error => {
            this.Cookie.removeAll();
            this.router.navigateByUrl('/login');
            console.log('obst error', error);
          }
        );
    }
  }

  saveToken(token) {
    // console.log(token);
    const exDate = new Date();
    exDate.setTime(exDate.getTime() + token.expires_in * 1000);
    this.Cookie.put('access_token', token.access_token, { expires: exDate });
    return;
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http
      .request(
        new Request({
          method: RequestMethod.Post,
          url: this.baseUrl + 'login',
          body: { name: user, password: pass }
        })
      )
      .pipe(
        map(response => {
          const res = response.json();
          this.auth_token = res.success ? res.token : null;
          if (res.success) {
            localStorage.setItem('access_token', JSON.stringify(res.token));
          }
          return res.success;
        })
      );
  }

  public sendRequest(
    method: RequestMethod,
    url: string,
    body?,
    auth: boolean = false,
    par?
  ): Observable<any> {
    const params = new URLSearchParams();
    par = par == null ? '' : par;

    const acc = this.Cookie.get('access_token');
    const ref = this.Cookie.get('refresh_token');

    // if no authentication required
    if (!auth) {
      const request = new Request({
        method: method,
        url: this.baseUrl + url + '?' + par + params.toString(),
        // url: this.baseUrl + url ,
        body: body
      });
      console.log('Condition 1 : ', request);
      return this.http.request(request).pipe(
        map(response => {
          if (response['_body'] === '') {
            return response;
          }
          return response.json();
        })
      );

      // if authentication required and access_token present
    } else if (auth && !!acc) {
      params.append('access_token', this.Cookie.get('access_token'));
      const request = new Request({
        method: method,
        url: this.baseUrl + url + '?' + par + params.toString(),
        body: body
      });
      console.log('Condition 2 : ', request);

      return this.http.request(request).pipe(
        map(response => {
          if (response['_body'] === '') {
            return response;
          }
          return response.json();
        }),
        catchError((error: Response) => {
          console.log(error);
          Observable.throw(this.handleError(error));
          if (error.status === 404) {
            console.log(error);
            // return throwError(new NotFoundError(error));
          }
          return throwError(error);
        })
      );
      // .catch(err => Observable.throw(this.handleError(err)));

      // if (auth requred and no access_token present and refresh token present) then obtain access_token using refresh token
    } else if (auth && !acc && !!ref) {
      this.obtainAccessTokenByRefreshToken().then(ref => {
        // console.log('refresh ' + ref);
        params.append('access_token', this.Cookie.get('access_token'));
        const request = new Request({
          method: method,
          url: this.baseUrl + url + '?' + par + params.toString(),
          body: body
        });
        console.log('Condition 3 : ', request);
        // console.log(this.Cookie.get('accesstoken'));
        return this.http
          .request(request)
          .pipe(map(response => response.json()));
      });
    } else if (auth && !acc && !ref) {
      console.log('idiot');
    } else {
      // if no refresh token present
      return null;
    }
  }

  loginErrorHandler(err) {
    // console.log('Error code ' + err.status);
    this.Cookie.removeAll();
    this.router.navigateByUrl('/login/UserName or password error');
  }

  parseJSON(response) {
    return response.text().then(function (text) {
      return text ? JSON.parse(text) : {};
    });
  }

  private handleError(error: Response) {
    console.log('Error with status : ' + error.status);
    console.log(error);
    const st = +error.status;
    // console.log(st);
    if (st === 0 || st === 401) {
      // console.log('clearing access token');
      this.Cookie.remove('access_token');
    }

    if (error.status === 403) {
      return error;
    }
  }
}
