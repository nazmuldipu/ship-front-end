import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './components/pagination/pagination.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { LoadingComponent } from './components/loading/loading.component';
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';

@NgModule({
  declarations: [PaginationComponent, LoadingComponent, ChangePasswordFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Daterangepicker,
    NgbModule.forRoot()
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Daterangepicker,
    PaginationComponent,
    LoadingComponent,
    ChangePasswordFormComponent
  ]
})
export class SharedModule {}
