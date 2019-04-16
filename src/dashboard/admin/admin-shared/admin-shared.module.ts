import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHotelListComponent } from './components/admin-hotel-list/admin-hotel-list.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [AdminHotelListComponent],
  imports: [SharedModule],
  exports: [SharedModule, AdminHotelListComponent]
})
export class AdminSharedModule {}
