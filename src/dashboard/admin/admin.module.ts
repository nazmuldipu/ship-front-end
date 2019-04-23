import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'category',
    loadChildren: './category/category.module#CategoryModule'
  },
  {
    path: 'seats',
    loadChildren: './seats/seats.module#SeatsModule'
  },
  {
    path: 'sell',
    loadChildren: './sell/sell.module#SellModule'
  },
  {
    path: 'ships',
    loadChildren: './ships/ships.module#ShipsModule'
  }
];

@NgModule({
  declarations: [],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class AdminModule {}
