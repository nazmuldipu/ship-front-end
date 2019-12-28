import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceAdminSharedModule } from '../service-admin-shared/service-admin-shared.module';
import { SellsReportComponent } from './containers/sells-report/sells-report.component';
import { SellsReportRangeComponent } from './containers/sells-report-range/sells-report-range.component';
import { CounterReportComponent } from './containers/counter-report/counter-report.component';
import { BookingReportListComponent } from './containers/booking-report-list/booking-report-list.component';
import { AgentReportComponent } from './containers/agent-report/agent-report.component';
import { ServiceAgentDateReportComponent } from './components/service-agent-date-report/service-agent-date-report.component';

export const ROUTES: Routes = [
  { path: 'counter', component: CounterReportComponent },
  { path: 'sells', component: SellsReportComponent },
  { path: 'range', component: SellsReportRangeComponent },
  { path: 'booking', component: BookingReportListComponent },
  { path: 'agent', component: AgentReportComponent }
];

@NgModule({
  declarations: [SellsReportComponent, SellsReportRangeComponent,
    CounterReportComponent, BookingReportListComponent, AgentReportComponent, ServiceAgentDateReportComponent],
  imports: [ServiceAdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class SReportModule { }
