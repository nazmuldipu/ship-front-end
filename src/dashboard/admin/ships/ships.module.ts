import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { AddShipFormComponent } from './components/add-ship-form/add-ship-form.component';
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
  declarations: [
    AddComponent,
    DetailsComponent,
    ListComponent,
    AddShipFormComponent
  ],
  imports: [AdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class ShipsModule {}
