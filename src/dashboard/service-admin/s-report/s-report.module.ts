import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceAdminSharedModule } from '../service-admin-shared/service-admin-shared.module';
import { SellsReportComponent } from './containers/sells-report/sells-report.component';
import { SellsReportRangeComponent } from './containers/sells-report-range/sells-report-range.component';

export const ROUTES: Routes = [
  { path: 'sells', component: SellsReportComponent },
  { path: 'range', component: SellsReportRangeComponent }
];

@NgModule({
  declarations: [SellsReportComponent, SellsReportRangeComponent],
  imports: [ServiceAdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class SReportModule { }
