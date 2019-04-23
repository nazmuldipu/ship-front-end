import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './containers/sell/sell.component';
import { AdminSharedModule } from 'src/dashboard/admin/admin-shared/admin-shared.module';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: SellComponent }
];

@NgModule({
  declarations: [SellComponent],
  imports: [
    AdminSharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class SellModule { }
