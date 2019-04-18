import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSharedModule } from 'src/dashboard/admin/admin-shared/admin-shared.module';

import { AddComponent } from './containers/add/add.component';
import { DetailsComponent } from './containers/details/details.component';
import { ListComponent } from './containers/list/list.component';
import { SeatFormComponent } from './components/seat-form/seat-form.component';

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
  declarations: [
    AddComponent,
    DetailsComponent,
    ListComponent,
    SeatFormComponent
  ],
  imports: [CommonModule, AdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class SeatsModule {}
