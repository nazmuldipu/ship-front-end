import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { RestDataService } from './rest-data.service';
import { UserService } from './user.service';
import { ShipService } from './ship.service';
import { CategoryService } from './category.service';

@NgModule({
  providers: [
    AuthService,
    RestDataService,
    UserService,
    ShipService,
    CategoryService
  ]
})
export class ServiceModule {}
