import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { RestDataService } from './rest-data.service';

@NgModule({
  providers: [AuthService, RestDataService]
})
export class ServiceModule {}
