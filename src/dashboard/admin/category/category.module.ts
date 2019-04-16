import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { AddComponent } from './containers/add/add.component';
import { DetailsComponent } from './containers/details/details.component';
import { ListComponent } from './containers/list/list.component';

export const ROUTES: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'add/:id', component: AddComponent },
  { path: ':id', component: DetailsComponent },
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  declarations: [AddComponent, ListComponent, DetailsComponent],
  imports: [AdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class CategoryModule {}
