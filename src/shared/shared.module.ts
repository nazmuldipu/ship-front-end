import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Daterangepicker } from 'ng2-daterangepicker';

import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SeatPlanOtherComponent } from './components/seat-plans/seat-plan-other/seat-plan-other.component';
import { SeatPlanSukantoComponent } from './components/seat-plans/seat-plan-sukanto/seat-plan-sukanto.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketPrintComponent } from './components/ticket-print/ticket-print.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SeatPlanBayCruiserComponent } from './components/seat-plans/seat-plan-bay-cruiser/seat-plan-bay-cruiser.component';

@NgModule({
  declarations: [
    PaginationComponent,
    LoadingComponent,
    ChangePasswordFormComponent,
    TicketDetailsComponent,
    UserFormComponent,
    TicketPrintComponent,
    SeatPlanSukantoComponent,
    SeatPlanOtherComponent,
    SeatPlanBayCruiserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Daterangepicker,
    NgbModule.forRoot()
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Daterangepicker,
    PaginationComponent,
    LoadingComponent,
    TicketDetailsComponent,
    UserFormComponent,
    TicketPrintComponent,
    ChangePasswordFormComponent,
    SeatPlanSukantoComponent,
    SeatPlanOtherComponent,
    SeatPlanBayCruiserComponent
  ]
})
export class SharedModule { }
