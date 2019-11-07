import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceAdminSharedModule } from '../service-admin-shared/service-admin-shared.module';
import { SellsReportComponent } from './containers/sells-report/sells-report.component';
import { SellsReportRangeComponent } from './containers/sells-report-range/sells-report-range.component';
import { CounterReportComponent } from './containers/counter-report/counter-report.component';

export const ROUTES: Routes = [
  { path: 'counter', component: CounterReportComponent },
  { path: 'sells', component: SellsReportComponent },
  { path: 'range', component: SellsReportRangeComponent }
];

@NgModule({
  declarations: [SellsReportComponent, SellsReportRangeComponent, CounterReportComponent],
  imports: [ServiceAdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class SReportModule { }
