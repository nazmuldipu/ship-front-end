import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceAdminSharedModule } from 'src/dashboard/service-admin/service-admin-shared/service-admin-shared.module';

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
  imports: [ServiceAdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class SSellModule {}
