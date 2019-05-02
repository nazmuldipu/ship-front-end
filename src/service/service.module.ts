import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { RestDataService } from './rest-data.service';
import { UserService } from './user.service';
import { ShipService } from './ship.service';
import { CategoryService } from './category.service';
import { SeatsService } from './seats.service';
import { AccountingService } from './accounting.service';
import { ReportService } from './report.service';
import { UtilService } from './util.service';

@NgModule({
  providers: [
    AuthService,
    RestDataService,
    UserService,
    ShipService,
    CategoryService,
    SeatsService,
    AccountingService,
    ReportService,
    UtilService
  ]
})
export class ServiceModule {}
