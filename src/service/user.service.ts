import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { RestDataService } from './rest-data.service';
import { User } from 'src/shared/models/user.model';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serviceUrl = 'api/v1/users';

  constructor(private dataSource: RestDataService, private router: Router) {}

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
    // .subscribe(
    //   data => {
    //     console.log('registration success');
    //     this.router.navigateByUrl('/login');
    //   },
    //   error => {
    //     console.log('Registration Failed' + error.status);
    //   }
    // );
  }
}
