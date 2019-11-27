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
import { TicketPrintComponent } from './components/tickets/ticket-print/ticket-print.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SeatPlanBayCruiserComponent } from './components/seat-plans/seat-plan-bay-cruiser/seat-plan-bay-cruiser.component';
import { FooterComponent } from './footer/footer.component';
import { TicketSukantababuPrintComponent } from './components/tickets/ticket-sukantababu-print/ticket-sukantababu-print.component';
import { TiketBaycruisePrintComponent } from './components/tickets/tiket-baycruise-print/tiket-baycruise-print.component';
import { SeatStatusBayCruiserComponent } from './components/seat-status/seat-status-bay-cruiser/seat-status-bay-cruiser.component';
import { SeatStatusOtherComponent } from './components/seat-status/seat-status-other/seat-status-other.component';
import { SeatStatusSukantoComponent } from './components/seat-status/seat-status-sukanto/seat-status-sukanto.component';

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
    SeatPlanBayCruiserComponent,
    FooterComponent,
    TicketSukantababuPrintComponent,
    TiketBaycruisePrintComponent,
    SeatStatusBayCruiserComponent,
    SeatStatusOtherComponent,
    SeatStatusSukantoComponent
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
    TicketSukantababuPrintComponent,
    TiketBaycruisePrintComponent,
    ChangePasswordFormComponent,
    FooterComponent,
    SeatPlanSukantoComponent,
    SeatPlanOtherComponent,
    SeatPlanBayCruiserComponent,
    SeatStatusBayCruiserComponent,
    SeatStatusOtherComponent,
    SeatStatusSukantoComponent
  ]
})
export class SharedModule { }
