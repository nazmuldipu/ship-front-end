import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show = false;
  appUser$;

  constructor(
    // private auth: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    // await this.auth.getUser$().subscribe(user => {
    //   if (user) {
    //     this.appUser$ = user;
    //   }
    // });
  }

  toggleCollapse() {
    this.show = !this.show;
  }
}
