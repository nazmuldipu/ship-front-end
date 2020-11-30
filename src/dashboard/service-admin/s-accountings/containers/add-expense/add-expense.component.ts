import { Component } from '@angular/core';
import { Ship } from 'src/shared/models/ship.model';
import { ShipCashbookPage } from 'src/shared/models/ship-cashbook';
import { AccountingService } from 'src/service/accounting.service';
import { ShipAdminCashbookPage } from 'src/shared/models/ship-admin-cashbook.model';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent {
  shipAdminCashbookPage: ShipAdminCashbookPage;
  loading = false;
  expenseForm = true;

  constructor(private accountingService: AccountingService) { }

  ngOnInit() {
    this.getShipAdminCashbook()
  }

  async getShipAdminCashbook(page: number = 0) {
    this.loading = true;
    try {
      this.shipAdminCashbookPage = await this.accountingService.getShipAdminCashbook(page).toPromise();
      this.loading = false;
    } catch (err) { console.log(err) }
  }

  async onSubmit({ explanation, debit, credit }) {
    try {
      const resp = await this.accountingService.addServiceAdminExpense(credit, explanation).toPromise();
      this.getShipAdminCashbook();
    } catch (err) { console.log(err) }
  }

  // onSubmit({ explanation, debit, credit }) {
  //   this.accountingService
  //     .addServiceAdminExpense(this.ship.id, credit, explanation)
  //     .subscribe(data => {
  //       console.log('Success');
  //       this.getServiceAdminCashbookByShipId(this.ship.id);
  //     });
  // }
}
