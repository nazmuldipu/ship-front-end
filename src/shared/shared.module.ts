import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './components/pagination/pagination.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { LoadingComponent } from './components/loading/loading.component';
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TicketPrintComponent } from './components/ticket-print/ticket-print.component';
import { SeatPlanSukantoComponent } from './components/seat-plan-sukanto/seat-plan-sukanto.component';

@NgModule({
  declarations: [
    PaginationComponent,
    LoadingComponent,
    ChangePasswordFormComponent,
    TicketDetailsComponent,
    UserFormComponent,
    TicketPrintComponent,
    SeatPlanSukantoComponent
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
    SeatPlanSukantoComponent
  ]
})
export class SharedModule {}
