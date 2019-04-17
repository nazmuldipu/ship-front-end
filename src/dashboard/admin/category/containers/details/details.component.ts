import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/shared/models/category.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id;
  category: Category;

  constructor(
    private categoryService: CategoryService,
    private activeRoute: ActivatedRoute
  ) {
    this.id = activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.id) {
      this.getAdminCategory(this.id);
    }
  }

  async getAdminCategory(id: number) {
    this.categoryService.getAdminCategory(id).subscribe(data => {
      this.category = data;
    });
  }

  onEdit(id) {
    console.log('ON edit : ', id);
  }
}
