import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message = '';

  constructor(private auth: AuthService) { }

  ngOnInit() { }

  onCreate(event) {
    this.message = null;
    this.auth.authenticate(event.username, event.password).subscribe(
      data => {
        console.log(data);
        data.authorities.forEach(element => {
          if (element.authority == 'ROLE_SERVICE_AGENT') {
            console.log('Get my permissions')
          }
        });
        this.auth.saveToken(data, '');
      },
      error => {
        this.message = 'User Id or password error';
      }
    );
  }
}
