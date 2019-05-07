import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceAdminShipListComponent } from './components/service-admin-ship-list/service-admin-ship-list.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [ServiceAdminShipListComponent],
  imports: [SharedModule],
  exports: [SharedModule, ServiceAdminShipListComponent]
})
export class ServiceAdminSharedModule {}
