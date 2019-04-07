import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ships',
  // templateUrl: './ships.component.html',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
