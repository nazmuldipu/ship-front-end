import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminSharedModule } from 'src/dashboard/admin/admin-shared/admin-shared.module';
import { SellsReportComponent } from './containers/sells-report/sells-report.component';
import { HotelReportComponent } from './containers/hotel-report/hotel-report.component';
import { SellsReportRangeComponent } from './containers/sells-report-range/sells-report-range.component';
import { AgentReportComponent } from './containers/agent-report/agent-report.component';

export const ROUTES: Routes = [
  { path: 'sells', component: SellsReportComponent },
  { path: 'sells-range', component: SellsReportRangeComponent },
  { path: 'ship', component: HotelReportComponent },
  { path: 'agent', component: AgentReportComponent }
];

@NgModule({
  declarations: [SellsReportComponent, HotelReportComponent, SellsReportRangeComponent, AgentReportComponent],
  imports: [AdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class ReportModule { }
