import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentBalanceComponent } from './containers/agent-balance/agent-balance.component';
import { AddIncomeComponent } from './containers/add-income/add-income.component';
import { AddExpenseComponent } from './containers/add-expense/add-expense.component';
import { AdminCashbookComponent } from './containers/admin-cashbook/admin-cashbook.component';
import { ShipLedgerComponent } from './containers/ship-ledger/ship-ledger.component';
import { PayToShipComponent } from './containers/pay-to-ship/pay-to-ship.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { AdminCashbookTableComponent } from './components/admin-cashbook-table/admin-cashbook-table.component';
import { AdminIncomeExpenseComponent } from './components/admin-income-expense/admin-income-expense.component';
import { PayShipFormComponent } from './components/pay-ship-form/pay-ship-form.component';

export const ROUTES: Routes = [
  { path: 'cashbook', component: AdminCashbookComponent },
  { path: 'ship-ledger', component: ShipLedgerComponent },
  { path: 'add-income', component: AddIncomeComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'pay-ship', component: PayToShipComponent },
  { path: 'agent-balance', component: AgentBalanceComponent }
];

@NgModule({
  declarations: [
    AgentBalanceComponent,
    AddIncomeComponent,
    AddExpenseComponent,
    AdminCashbookComponent,
    ShipLedgerComponent,
    PayToShipComponent,
    AdminCashbookTableComponent,
    AdminIncomeExpenseComponent,
    PayShipFormComponent
  ],
  imports: [AdminSharedModule, RouterModule.forChild(ROUTES)]
})
export class AccountingsModule {}
