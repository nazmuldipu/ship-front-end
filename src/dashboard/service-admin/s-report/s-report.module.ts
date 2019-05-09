import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceAdminSharedModule } from '../service-admin-shared/service-admin-shared.module';
import { SellsReportComponent } from './containers/sells-report/sells-report.component';

export const ROUTES: Routes = [{ path: '', component: SellsReportComponent }];

@NgModule({
  declarations: [SellsReportComponent],
  imports: [ServiceAdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class SReportModule {}
