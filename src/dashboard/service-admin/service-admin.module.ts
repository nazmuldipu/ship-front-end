import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'sell',
    loadChildren: './s-sell/s-sell.module#SSellModule'
  },
  {
    path: 'accountings',
    loadChildren: './s-accountings/s-accountings.module#SAccountingsModule'
  },
  {
    path: 'users',
    loadChildren: './s-users/s-users.module#SUsersModule'
  },
  {
    path: 'report',
    loadChildren: './s-report/s-report.module#SReportModule'
  }
];

@NgModule({
  declarations: [],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class ServiceAdminModule {}
