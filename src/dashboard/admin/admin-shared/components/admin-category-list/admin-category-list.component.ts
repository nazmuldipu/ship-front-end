import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { CategoryPage, Category } from 'src/shared/models/category.model';

@Component({
  selector: 'admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.scss']
})
export class AdminCategoryListComponent implements OnChanges {
  @Input() shipId: number;
  @Output() back = new EventEmitter<any>();
  @Output() category = new EventEmitter<Category>();

  categoryPage: CategoryPage;

  constructor(private categoryService: CategoryService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getCategoryPage(this.shipId, 0);
  }

  async getCategoryPage(shipId: number, page: number = 0) {
    await this.categoryService
      .getAdminCategoryByShiplId(shipId, page)
      .subscribe(data => {
        this.categoryPage = data;
      });
  }

  onSelectCategory(categoryId) {
    const categ = this.categoryPage.content.find(c => c.id == categoryId);
    this.category.emit(categ);
  }

  onBack() {
    this.back.emit('back');
  }
}
