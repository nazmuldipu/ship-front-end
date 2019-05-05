import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './containers/add-agent/add-agent.component';
import { SharedModule } from 'src/shared/shared.module';
import { AgentFormComponent } from './components/agent-form/agent-form.component';

export const ROUTES: Routes = [{ path: 'agent', component: AddAgentComponent }];

@NgModule({
  declarations: [AddAgentComponent, AgentFormComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class SUsersModule {}
