import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { Category } from 'src/shared/models/category.model';
import { CategoryService } from 'src/service/category.service';

@Component({
  selector: 'app-price-map',
  templateUrl: './price-map.component.html',
  styleUrls: ['./price-map.component.scss']
})
export class PriceMapComponent implements OnInit {
  ship: Ship;
  category: Category;
  editFrom = false;
  reloadPriceMap = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() { }

  onSelectShip(ship) {
    this.ship = ship;
  }

  onSelectCategory(category) {
    this.category = category;
  }

  onEditCategoryPrice(categoryId) {
    this.editFrom = true;
  }

  onCloseEditForm(event) {
    this.editFrom = false;
  }

  onPriceMapUpdate(event) {
    const startDate = this.makeDateString(event.startDate);
    const endDate = this.makeDateString(event.endDate);
    this.categoryService
      .updateAdminPriceMap(
        event.categoryId,
        startDate,
        endDate,
        event.amount
      )
      .subscribe(data => {
        this.reloadPriceMap = !this.reloadPriceMap;
        this.onCloseEditForm(true);
      });
  }

  makeDateString(date) {
    const dateString = date.year + '-' + (date.month < 10 ? '0' + date.month : date.month) + '-' + (date.day < 10 ? '0' + date.day : date.day);
    return dateString;
  }

}
