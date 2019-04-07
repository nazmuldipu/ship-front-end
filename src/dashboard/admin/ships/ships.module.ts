import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './containers/add/add.component';
import { DetailsComponent } from './containers/details/details.component';
import { ListComponent } from './containers/list/list.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AddShipFormComponent } from './components/add-ship-form/add-ship-form.component';

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
  declarations: [AddComponent, DetailsComponent, ListComponent, AddShipFormComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class ShipsModule {}
