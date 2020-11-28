import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'seats',
    loadChildren: () => import('./seats/seats.module').then(m => m.SeatsModule)
  },
  {
    path: 'sell',
    loadChildren: () => import('./sell/sell.module').then(m => m.SellModule)
  },
  {
    path: 'ships',
    loadChildren: () => import('./ships/ships.module').then(m => m.ShipsModule)
  },
  {
    path: 'accountings',
    loadChildren: () => import('./accountings/accountings.module').then(m => m.AccountingsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then(m => m.ReportModule)
  }
];

@NgModule({
  declarations: [],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class AdminModule {}
