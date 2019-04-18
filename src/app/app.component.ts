import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng4-loading-spinner></ng4-loading-spinner>
    <router-outlet></router-outlet>
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ship-front-end';
}
