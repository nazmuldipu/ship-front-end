import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { CookieModule } from 'ngx-cookie';

import { LoginFormComponent } from '../auth/components/login-form/login-form.component';
import { RegisterFormComponent } from '../auth/components/register-form/register-form.component';
import { LoginComponent } from '../auth/containers/login/login.component';
import { RegisterComponent } from '../auth/containers/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from '../auth/containers/error/error.component';

// routes
export const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'error/:code/:message',
    component: ErrorComponent
  },
  {
    path: 'error/:code',
    component: ErrorComponent
  },
  {
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    loadChildren: '../ships/ships.module#ShipsModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    NgbModule,
    AppRoutingModule,
    CookieModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
