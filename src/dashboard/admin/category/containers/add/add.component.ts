import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { Category } from 'src/shared/models/category.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  id;
  ship: Ship;
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

  onSelectShip(ship) {
    this.ship = ship;
  }

  async getAdminCategory(id: number) {
    this.categoryService.getAdminCategory(id).subscribe(data => {
      this.category = data;
      this.ship = this.category.ship;
    });
  }

  onCreate(event: Category) {
    this.categoryService
      .saveAdminCategory(event, this.ship.id)
      .subscribe(data => {
        this.router.navigate(['/dashboard/admin/category', data.id]);
      });
  }

  onUpdate(event: Category) {
    this.categoryService
      .updateAdminCategory(this.ship.id, this.category.id, event)
      .subscribe(data => {
        this.router.navigate(['/dashboard/admin/category', this.category.id]);
      });
  }
}
