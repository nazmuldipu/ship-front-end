import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: ['./dash-nav.component.scss']
})
export class DashNavComponent implements OnInit {
  username = 'user';
  show = false;
  constructor(public auth: AuthService) {}

  ngOnInit() {
    let username = this.auth.user.name;
    if (username != null && username.length > 1) {
      this.username = username;
    }
  }

  hasAuthority(authority: string): boolean {
    if (authority == '' || authority == null) return true;
    return this.auth.hasAuthorities(authority);
  }

  logout() {
    this.auth.clear();
  }

  toggleCollapse() {
    this.show = !this.show;
  }
}
