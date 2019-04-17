import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminShipListComponent } from './components/admin-ship-list/admin-ship-list.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [AdminShipListComponent],
  imports: [SharedModule],
  exports: [SharedModule, AdminShipListComponent]
})
export class AdminSharedModule {}
