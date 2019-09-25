import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  images = [1, 2, 3,].map(
    i => `assets/images/carousal/ship-${i}.jpg`
  );

  constructor() { }

  ngOnInit() {
  }

}
