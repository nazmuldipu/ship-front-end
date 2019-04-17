import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { Category } from 'src/shared/models/category.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  id;
  shipId;
  category: Category;

  constructor(
    private categoryService: CategoryService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.id) {
      this.getAdminCategory(this.id);
    }
  }

  onSelectShip(shipId) {
    this.shipId = shipId;
  }

  async getAdminCategory(id: number) {
    this.categoryService.getAdminCategory(id).subscribe(data => {
      this.category = data;
      this.shipId = this.category.ship.id;
    });
  }

  onCreate(event: Category) {
    this.categoryService
      .saveAdminCategory(event, this.shipId)
      .subscribe(data => {
        this.router.navigate(['/dashboard/admin/category']);
      });
  }

  onUpdate(event: Category) {
    this.categoryService
      .updateAdminCategory(this.shipId, this.category.id, event)
      .subscribe(data => {
        this.router.navigate(['/dashboard/admin/category']);
      });
  }
}
