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

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {}

  onSelectShip(ship) {
    this.ship = ship;
  }

  onSelectCategory(category) {
    this.category = category;
  }

  onEditCategoryDiscount(categoryId) {
    this.editFrom = true;
    console.log(categoryId);
  }

  onCloseEditForm(event) {
    this.editFrom = false;
  }

  onDiscountMapUpdate(event) {
    console.log(event.startDate, event.endDate);
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
        console.log(data);
      });
  }

  makeDateString(obj) {
    return obj.year + '-' + obj.month + '-' + obj.day;
  }
}
