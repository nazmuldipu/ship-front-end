import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { RestDataService } from './rest-data.service';
import { UserService } from './user.service';
import { ShipService } from './ship.service';

@NgModule({
  providers: [AuthService, RestDataService, UserService, ShipService]
})
export class ServiceModule {}
