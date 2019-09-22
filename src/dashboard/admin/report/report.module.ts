import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminSharedModule } from 'src/dashboard/admin/admin-shared/admin-shared.module';
import { SellsReportComponent } from './containers/sells-report/sells-report.component';
import { HotelReportComponent } from './containers/hotel-report/hotel-report.component';
import { SellsReportRangeComponent } from './containers/sells-report-range/sells-report-range.component';

export const ROUTES: Routes = [
  { path: 'sells', component: SellsReportComponent },
  { path: 'sells-range', component: SellsReportRangeComponent },
  { path: 'hotel', component: HotelReportComponent }
];

@NgModule({
  declarations: [SellsReportComponent, HotelReportComponent, SellsReportRangeComponent],
  imports: [AdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class ReportModule { }
