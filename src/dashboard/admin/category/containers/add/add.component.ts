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
    try {
      this.category = await this.categoryService.getAdminCategory(id).toPromise();
      this.ship = this.category.ship;
    } catch (err) {
      console.log(err);
    }
    // await this.categoryService.getAdminCategory(id).subscribe(data => {
    //   this.category = data;
    //   this.ship = this.category.ship;
    // });
  }

  async onCreate(event: Category) {
    try {
      const resp = await this.categoryService.saveAdminCategory(event, this.ship.id).toPromise();
      console.log(resp);
      this.router.navigate(['/dashboard/admin/category', resp.id]);
    } catch (err) { console.log(err); }
    // this.categoryService
    //   .saveAdminCategory(event, this.ship.id)
    //   .subscribe(data => {
    //     this.router.navigate(['/dashboard/admin/category', data.id]);
    //   });
  }

  async onUpdate(event: Category) {
    try {
      const resp = await this.categoryService.updateAdminCategory(this.ship.id, this.category.id, event).toPromise();
      this.router.navigate(['/dashboard/admin/category', this.category.id]);
    } catch (err) { }
    // this.categoryService
    //   .updateAdminCategory(this.ship.id, this.category.id, event)
    //   .subscribe(data => {
    //     this.router.navigate(['/dashboard/admin/category', this.category.id]);
    //   });
  }
}
