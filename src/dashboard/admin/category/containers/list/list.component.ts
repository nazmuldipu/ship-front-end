import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { CategoryPage } from 'src/shared/models/category.model';
import { Ship } from 'src/shared/models/ship.model';
import { UtilService } from 'src/service/util.service';

@Component({
  selector: 'category-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  ship: Ship;
  categoryPage: CategoryPage;

  message = '';

  constructor(private categoryService: CategoryService, private utilService: UtilService) { }

  onSelectShip(ship) {
    this.ship = ship;
    this.getCategoryPage(ship.id);
  }

  async getCategoryPage(shipId: number, page: number = 0) {
    await this.categoryService
      .getAdminCategoryByShiplId(shipId, page)
      .subscribe(data => {
        this.categoryPage = data;
        this.categoryPage.content.sort(this.utilService.dynamicSortObject('priority'));
      });
  }

  async onDelete(id) {
    await this.categoryService.deleteAdminCategory(id).subscribe(data => {
      this.getCategoryPage(this.ship.id);
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
