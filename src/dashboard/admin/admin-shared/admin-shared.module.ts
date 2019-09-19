import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminShipListComponent } from './components/admin-ship-list/admin-ship-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { AdminCategoryListComponent } from './components/admin-category-list/admin-category-list.component';
import { FindUserFormComponent } from './components/find-user-form/find-user-form.component';
import { ShipAdminListComponent } from './components/ship-admin-list/ship-admin-list.component';

@NgModule({
  declarations: [AdminShipListComponent, AdminCategoryListComponent, FindUserFormComponent, ShipAdminListComponent],
  imports: [SharedModule],
  exports: [SharedModule, AdminShipListComponent, AdminCategoryListComponent, FindUserFormComponent, ShipAdminListComponent]
})
export class AdminSharedModule { }
