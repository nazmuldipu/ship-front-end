import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceAdminShipListComponent } from './components/service-admin-ship-list/service-admin-ship-list.component';
import { SharedModule } from 'src/shared/shared.module';
import { ServiceAdminAgentListComponent } from './components/service-admin-agent-list/service-admin-agent-list.component';

@NgModule({
  declarations: [ServiceAdminShipListComponent, ServiceAdminAgentListComponent],
  imports: [SharedModule],
  exports: [SharedModule, ServiceAdminShipListComponent, ServiceAdminAgentListComponent]
})
export class ServiceAdminSharedModule {}
