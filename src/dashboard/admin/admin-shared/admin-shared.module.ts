import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminShipListComponent } from './components/admin-ship-list/admin-ship-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { AdminCategoryListComponent } from './components/admin-category-list/admin-category-list.component';

@NgModule({
  declarations: [AdminShipListComponent, AdminCategoryListComponent],
  imports: [SharedModule],
  exports: [SharedModule, AdminShipListComponent, AdminCategoryListComponent]
})
export class AdminSharedModule {}
