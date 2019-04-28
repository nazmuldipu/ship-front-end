import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIncomeExpenseComponent } from './admin-income-expense.component';

describe('AdminIncomeExpenseComponent', () => {
  let component: AdminIncomeExpenseComponent;
  let fixture: ComponentFixture<AdminIncomeExpenseComponent>;

  beforeEach(async(() => {
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
