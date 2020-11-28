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
import { UtilService } from 'src/service/util.service';

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

  constructor(private categoryService: CategoryService, private utilService: UtilService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCategoryPage(this.shipId);
  }

  async getCategoryPage(shipId: number) {
    try {
      this.categoryList = await this.categoryService.getAdminCategoryListByShiplId(shipId).toPromise();
      this.categoryList.sort(this.utilService.dynamicSortObject('priority'));
      this.onSelectCategory(this.categoryList[this.categoryList.length - 1].id);
    } catch (err) { console.log(err) }
    // try{}catch(err){console.log(err)}
  }

  onSelectCategory(categoryId) {
    const categ = this.categoryList.find(c => c.id == categoryId);
    this.category.emit(categ);
  }

  onBack() {
    this.back.emit('back');
  }
}
