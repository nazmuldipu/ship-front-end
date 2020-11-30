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
    // try{}catch(err){console.log(err)}
    try {
      this.categoryPage = await this.categoryService.getAdminCategoryByShiplId(shipId, page).toPromise();
      this.categoryPage.content.sort(this.utilService.dynamicSortObject('priority'));
    } catch (err) { console.log(err) }
    // await this.categoryService
    //   .getAdminCategoryByShiplId(shipId, page)
    //   .subscribe(data => {
    //     this.categoryPage = data;
    //     this.categoryPage.content.sort(this.utilService.dynamicSortObject('priority'));
    //   });
  }

  async onDelete(id) {
    if (confirm('Are you sure to Delete the category')) {
      try {
        await this.categoryService.deleteAdminCategory(id).toPromise();
        this.message = 'Category deleted successfully';
        this.getCategoryPage(this.ship.id);
      } catch (err) {
        console.log(err);
        this.message = 'Category deleted Failed';
      }
    }
  }

  clear() {
    this.message = '';
  }
}
