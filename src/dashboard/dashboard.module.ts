import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashNavComponent } from './containers/dash-nav/dash-nav.component';
import { IndexComponent } from './containers/index/index.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent, IndexComponent, DashNavComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class DashboardModule {}
