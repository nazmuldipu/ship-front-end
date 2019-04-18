import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { AdminDiscountMapComponent } from './components/admin-discount-map/admin-discount-map.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { AddComponent } from './containers/add/add.component';
import { DetailsComponent } from './containers/details/details.component';
import { DiscountMapComponent } from './containers/discount-map/discount-map.component';
import { ListComponent } from './containers/list/list.component';
import { AdminDiscountMapFormComponent } from './components/admin-discount-map-form/admin-discount-map-form.component';

export const ROUTES: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'add/:id', component: AddComponent },
  { path: 'discount-map', component: DiscountMapComponent },
  { path: ':id', component: DetailsComponent },
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    DetailsComponent,
    CategoryFormComponent,
    DiscountMapComponent,
    AdminDiscountMapComponent,
    AdminDiscountMapFormComponent
  ],
  imports: [AdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class CategoryModule {}
