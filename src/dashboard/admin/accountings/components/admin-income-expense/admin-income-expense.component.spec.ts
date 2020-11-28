import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminIncomeExpenseComponent } from './admin-income-expense.component';

describe('AdminIncomeExpenseComponent', () => {
  let component: AdminIncomeExpenseComponent;
  let fixture: ComponentFixture<AdminIncomeExpenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIncomeExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIncomeExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
