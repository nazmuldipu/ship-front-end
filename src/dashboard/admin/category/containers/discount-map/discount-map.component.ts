import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { Category } from 'src/shared/models/category.model';
import { CategoryService } from 'src/service/category.service';

@Component({
  selector: 'app-discount-map',
  templateUrl: './discount-map.component.html',
  styleUrls: ['./discount-map.component.scss']
})
export class DiscountMapComponent implements OnInit {
  ship: Ship;
  category: Category;
  editFrom = false;
  reloadDiscountMap = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() { }

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

  onDiscountMapUpdate(event) {
    const startDate = this.makeDateString(event.startDate);
    const endDate = this.makeDateString(event.endDate);
    // event.endDate.year + '-' + event.endDate.month + '-' + event.endDate.day;
    this.categoryService
      .updateAdminDiscountMap(
        event.categoryId,
        startDate,
        endDate,
        event.amount
      )
      .subscribe(data => {
        this.reloadDiscountMap = !this.reloadDiscountMap;
        this.onCloseEditForm(true);
      });
  }

  makeDateString(date) {
    const dateString = date.year + '-' + (date.month < 10 ? '0' + date.month : date.month) + '-' + (date.day < 10 ? '0' + date.day : date.day);
    return dateString;
  }
}
