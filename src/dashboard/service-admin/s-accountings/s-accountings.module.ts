import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashbookComponent } from './containers/cashbook/cashbook.component';
import { HotelswaveLedgerComponent } from './containers/hotelswave-ledger/hotelswave-ledger.component';
import { ServiceAdminSharedModule } from '../service-admin-shared/service-admin-shared.module';
import { AddIncomeComponent } from './containers/add-income/add-income.component';
import { AddExpenseComponent } from './containers/add-expense/add-expense.component';
import { AgentComponent } from './containers/agent/agent.component';
import { ServiceAdminCashbookComponent } from './components/service-admin-cashbook/service-admin-cashbook.component';
import { ServiceAdminIncomeExpenseFormComponent } from './components/service-admin-income-expense-form/service-admin-income-expense-form.component';

export const ROUTES: Routes = [
  { path: 'cashbook', component: CashbookComponent },
  { path: 'hotelswave-ledgers', component: HotelswaveLedgerComponent },
  { path: 'add-income', component: AddIncomeComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'agents', component: AgentComponent }
];

@NgModule({
  declarations: [
    CashbookComponent,
    HotelswaveLedgerComponent,
    AddIncomeComponent,
    AddExpenseComponent,
    AgentComponent,
    ServiceAdminCashbookComponent,
    ServiceAdminIncomeExpenseFormComponent
  ],
  imports: [ServiceAdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class SAccountingsModule { }
