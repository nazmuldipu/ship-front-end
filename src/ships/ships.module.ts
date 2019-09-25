import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsComponent } from './ships.component';
import { IndexComponent } from './containers/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
  {
    path: '',
    component: ShipsComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ShipsComponent, IndexComponent, NavbarComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class ShipsModule { }
