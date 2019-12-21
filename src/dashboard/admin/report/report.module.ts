import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminSharedModule } from 'src/dashboard/admin/admin-shared/admin-shared.module';
import { SellsReportComponent } from './containers/sells-report/sells-report.component';
import { HotelReportComponent } from './containers/hotel-report/hotel-report.component';
import { SellsReportRangeComponent } from './containers/sells-report-range/sells-report-range.component';
import { AgentReportComponent } from './containers/agent-report/agent-report.component';
import { AgentDateReportComponent } from './components/agent-date-report/agent-date-report.component';
import { AgentDateReportRangeComponent } from './components/agent-date-report-range/agent-date-report-range.component';

export const ROUTES: Routes = [
  { path: 'sells', component: SellsReportComponent },
  { path: 'sells-range', component: SellsReportRangeComponent },
  { path: 'ship', component: HotelReportComponent },
  { path: 'agent', component: AgentReportComponent }
];

@NgModule({
  declarations: [SellsReportComponent, HotelReportComponent, SellsReportRangeComponent, AgentReportComponent, AgentDateReportComponent, AgentDateReportRangeComponent],
  imports: [AdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class ReportModule { }
