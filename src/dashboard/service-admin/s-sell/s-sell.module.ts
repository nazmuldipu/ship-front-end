import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { CancelComponent } from './containers/cancel/cancel.component';
import { SellComponent } from './containers/sell/sell.component';
import { StatusComponent } from './containers/status/status.component';

export const ROUTES: Routes = [
  { path: '', component: SellComponent },
  { path: 'status', component: StatusComponent },
  { path: 'cancel', component: CancelComponent }
];

@NgModule({
  declarations: [SellComponent, StatusComponent, CancelComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class SSellModule {}
