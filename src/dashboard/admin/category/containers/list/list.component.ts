import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { CategoryPage } from 'src/shared/models/category.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  shipId;
  categoryPage: CategoryPage;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {}

  onSelectShip(shipId) {
    this.shipId = shipId;
    this.getCategoryPage(shipId);
  }

  async getCategoryPage(shipId: number, page: number = 0) {
    await this.categoryService
      .getCategoryByShiplId(shipId, page)
      .subscribe(data => {
        this.categoryPage = data;
      });
  }
}
