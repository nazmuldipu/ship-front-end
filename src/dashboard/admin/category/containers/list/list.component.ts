import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { CategoryPage } from 'src/shared/models/category.model';

@Component({
  selector: 'category-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  shipId;
  categoryPage: CategoryPage;

  message = '';

  constructor(private categoryService: CategoryService) {}

  onSelectShip(shipId) {
    this.shipId = shipId;
    this.getCategoryPage(shipId);
  }

  async getCategoryPage(shipId: number, page: number = 0) {
    await this.categoryService
      .getAdminCategoryByShiplId(shipId, page)
      .subscribe(data => {
        this.categoryPage = data;
      });
  }

  async onDelete(id) {
    await this.categoryService.deleteAdminCategory(id).subscribe(data => {
      this.getCategoryPage(this.shipId);
      if (data.response == 'success') {
        this.message = 'Category deleted successfully';
      } else {
        this.message = 'Category deleted Failed';
      }
    });
  }

  clear() {
    this.message = '';
  }
}
