import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminShipListComponent } from './components/admin-ship-list/admin-ship-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { AdminCategoryListComponent } from './components/admin-category-list/admin-category-list.component';
import { FindUserFormComponent } from './components/find-user-form/find-user-form.component';

@NgModule({
  declarations: [AdminShipListComponent, AdminCategoryListComponent, FindUserFormComponent],
  imports: [SharedModule],
  exports: [SharedModule, AdminShipListComponent, AdminCategoryListComponent, FindUserFormComponent]
})
export class AdminSharedModule {}
