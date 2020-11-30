import { Component } from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { Category } from 'src/shared/models/category.model';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-discount-map',
  templateUrl: './discount-map.component.html',
  styleUrls: ['./discount-map.component.scss']
})
export class DiscountMapComponent {
  ship: Ship;
  category: Category;
  editFrom = false;
  reloadDiscountMap = false;

  constructor(private categoryService: CategoryService) { }

  onSelectShip(ship) {
    this.ship = ship;
  }

  onSelectCategory(category) {
    this.category = category;
  }

  onEditCategoryDiscount(categoryId) {
    this.editFrom = true;
  }

  onCloseEditForm(event) {
    this.editFrom = false;
  }

  async onDiscountMapUpdate(event) {
    console.log(event);
    const startDate = this.makeDateString(event.startDate);
    const endDate = this.makeDateString(event.endDate);
    try {
      const resp = await this.categoryService.updateAdminDiscountMap(
        event.categoryId, startDate, endDate, event.amount).toPromise();
      this.reloadDiscountMap = !this.reloadDiscountMap;
      this.onCloseEditForm(true);
    } catch (err) {
      console.log(err);
    }
  }

  makeDateString(date) {
    const dateString = date.year + '-' + (date.month < 10 ? '0' + date.month : date.month) + '-' + (date.day < 10 ? '0' + date.day : date.day);
    return dateString;
  }
}
