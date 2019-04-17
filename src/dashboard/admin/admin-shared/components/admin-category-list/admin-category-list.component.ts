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

  categoryList: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getCategoryPage(this.shipId);
  }

  async getCategoryPage(shipId: number) {
    await this.categoryService
      .getAdminCategoryListByShiplId(shipId)
      .subscribe(data => {
        this.categoryList = data;
        this.onSelectCategory(this.categoryList[data.length - 1].id);
      });
  }

  onSelectCategory(categoryId) {
    const categ = this.categoryList.find(c => c.id == categoryId);
    this.category.emit(categ);
  }

  onBack() {
    this.back.emit('back');
  }
}
