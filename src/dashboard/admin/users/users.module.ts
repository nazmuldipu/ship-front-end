import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSharedModule } from 'src/dashboard/admin/admin-shared/admin-shared.module';

import { ListComponent } from './containers/list/list.component';
import { AddComponent } from './containers/add/add.component';
import { AdminAgentComponent } from './containers/admin-agent/admin-agent.component';
import { ChangePasswordComponent } from './containers/change-password/change-password.component';
import { AssignUserComponent } from './containers/assign-user/assign-user.component';
import { AdminAgentFormComponent } from './components/admin-agent-form/admin-agent-form.component';
import { AssignUserFormComponent } from './components/assign-user-form/assign-user-form.component';
import { AssignShipAdminComponent } from './containers/assign-ship-admin/assign-ship-admin.component';

export const ROUTES: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'assign', component: AssignUserComponent },
  { path: 'assign-ship-admin', component: AssignShipAdminComponent },
  { path: 'admin-agent', component: AdminAgentComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    AdminAgentComponent,
    ChangePasswordComponent,
    AssignUserComponent,
    AdminAgentFormComponent,
    AssignUserFormComponent,
    AssignShipAdminComponent
  ],
  imports: [AdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class UsersModule { }
