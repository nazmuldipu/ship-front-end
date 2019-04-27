import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './containers/sell/sell.component';
import { AdminSharedModule } from 'src/dashboard/admin/admin-shared/admin-shared.module';
import { RouterModule, Routes } from '@angular/router';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TicketPrintComponent } from './components/ticket-print/ticket-print.component';
import { MysellsComponent } from './containers/mysells/mysells.component';

export const ROUTES: Routes = [
  { path: 'mySells', component: MysellsComponent },
  { path: '', component: SellComponent }
];

@NgModule({
  declarations: [
    SellComponent,
    TicketDetailsComponent,
    UserFormComponent,
    TicketPrintComponent,
    MysellsComponent
  ],
  imports: [AdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class SellModule {}
