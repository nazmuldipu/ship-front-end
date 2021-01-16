import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SellComponent } from './containers/sell/sell.component';
import { MySellsComponent } from './containers/my-sells/my-sells.component';
import { MyLedgerComponent } from './containers/my-ledger/my-ledger.component';
import { MyBalanceComponent } from './containers/my-balance/my-balance.component';
import { SharedModule } from '../../shared/shared.module';
import { StatusComponent } from './containers/status/status.component';

export const ROUTES: Routes = [
  { path: 'sell', component: SellComponent },
  { path: 'status', component: StatusComponent },
  { path: 'my-sells', component: MySellsComponent },
  { path: 'my-ledger', component: MyLedgerComponent },
  { path: 'my-balance', component: MyBalanceComponent }
];

@NgModule({
  declarations: [SellComponent, MySellsComponent, MyLedgerComponent, MyBalanceComponent, StatusComponent],
  imports: [
    SharedModule, RouterModule.forChild(ROUTES)
  ]
})
export class ServiceAgentModule { }
