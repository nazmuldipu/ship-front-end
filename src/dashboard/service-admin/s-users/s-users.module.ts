import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceAdminSharedModule } from '../service-admin-shared/service-admin-shared.module';
import { AgentFormComponent } from './components/agent-form/agent-form.component';
import { AddAgentComponent } from './containers/add-agent/add-agent.component';

export const ROUTES: Routes = [{ path: 'agent', component: AddAgentComponent }];

@NgModule({
  declarations: [AddAgentComponent, AgentFormComponent],
  imports: [ServiceAdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class SUsersModule {}
