import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceAdminSharedModule } from 'src/dashboard/service-admin/service-admin-shared/service-admin-shared.module';

import { SellComponent } from './containers/sell/sell.component';
import { StatusComponent } from './containers/status/status.component';
import { PrintTicketComponent } from './containers/print-ticket/print-ticket.component';

export const ROUTES: Routes = [
  { path: '', component: SellComponent },
  { path: 'status', component: StatusComponent },
  { path: 'print', component: PrintTicketComponent }
];

@NgModule({
  declarations: [SellComponent, StatusComponent, PrintTicketComponent],
  imports: [ServiceAdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class SSellModule {}
