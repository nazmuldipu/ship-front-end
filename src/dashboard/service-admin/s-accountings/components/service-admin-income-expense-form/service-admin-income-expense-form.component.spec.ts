import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceAdminIncomeExpenseFormComponent } from './service-admin-income-expense-form.component';

describe('ServiceAdminIncomeExpenseFormComponent', () => {
  let component: ServiceAdminIncomeExpenseFormComponent;
  let fixture: ComponentFixture<ServiceAdminIncomeExpenseFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAdminIncomeExpenseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAdminIncomeExpenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
