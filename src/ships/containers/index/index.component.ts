import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  images = [1, 2, 3, 4, 5, 6].map(
    i => `assets/images/carousal/carousel-${i}.jpeg`
  );

  constructor() { }

  ngOnInit() {
  }

}
