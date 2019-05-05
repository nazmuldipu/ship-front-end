import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    console.log(this.auth.authorities);
    if (this.auth.authorities.includes('ROLE_ADMIN')) {
      this.router.navigate(['/dashboard/admin/sell']);
    }
  }
}
