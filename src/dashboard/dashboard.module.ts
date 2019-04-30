import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashNavComponent } from './containers/dash-nav/dash-nav.component';
import { IndexComponent } from './containers/index/index.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashFooterComponent } from './containers/dash-footer/dash-footer.component';
import { ChangePasswordComponent } from './containers/change-password/change-password.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
      { path: 'change-password', component: ChangePasswordComponent },
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    IndexComponent,
    DashNavComponent,
    DashFooterComponent,
    ChangePasswordComponent
  ],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class DashboardModule {}
