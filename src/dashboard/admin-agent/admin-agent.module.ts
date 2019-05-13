import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { MyBalanceComponent } from './containers/my-balance/my-balance.component';
import { MyLedgerComponent } from './containers/my-ledger/my-ledger.component';
import { MySellsComponent } from './containers/my-sells/my-sells.component';
import { SellComponent } from './containers/sell/sell.component';

export const ROUTES: Routes = [
  { path: 'sell', component: SellComponent },
  { path: 'my-sells', component: MySellsComponent },
  { path: 'my-ledger', component: MyLedgerComponent },
  { path: 'my-balance', component: MyBalanceComponent }
];

@NgModule({
  declarations: [
    SellComponent,
    MySellsComponent,
    MyLedgerComponent,
    MyBalanceComponent
  ],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class AdminAgentModule {}
