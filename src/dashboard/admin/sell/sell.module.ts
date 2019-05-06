import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './containers/sell/sell.component';
import { AdminSharedModule } from 'src/dashboard/admin/admin-shared/admin-shared.module';
import { RouterModule, Routes } from '@angular/router';
// import { TicketDetailsComponent } from '../../../shared/components/ticket-details/ticket-details.component';
// import { UserFormComponent } from '../../../shared/components/user-form/user-form.component';
// import { TicketPrintComponent } from '../../../shared/components/ticket-print/ticket-print.component';
import { MysellsComponent } from './containers/mysells/mysells.component';
import { CancelBookingComponent } from './containers/cancel-booking/cancel-booking.component';
import { StatusComponent } from './containers/status/status.component';

export const ROUTES: Routes = [
  { path: 'mySells', component: MysellsComponent },
  { path: 'cancle-booking', component: CancelBookingComponent },
  { path: 'seat-status', component: StatusComponent },
  { path: '', component: SellComponent }
];

@NgModule({
  declarations: [
    SellComponent,
    MysellsComponent,
    CancelBookingComponent,
    StatusComponent
  ],
  imports: [AdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class SellModule {}
