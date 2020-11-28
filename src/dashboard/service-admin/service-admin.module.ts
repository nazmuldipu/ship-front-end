import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'sell',
    loadChildren: () => import('./s-sell/s-sell.module').then(m => m.SSellModule)
  },
  {
    path: 'accountings',
    loadChildren: () => import('./s-accountings/s-accountings.module').then(m => m.SAccountingsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./s-users/s-users.module').then(m => m.SUsersModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./s-report/s-report.module').then(m => m.SReportModule)
  }
];

@NgModule({
  declarations: [],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class ServiceAdminModule {}
