import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdminIncomeExpenseFormComponent } from './service-admin-income-expense-form.component';

describe('ServiceAdminIncomeExpenseFormComponent', () => {
  let component: ServiceAdminIncomeExpenseFormComponent;
  let fixture: ComponentFixture<ServiceAdminIncomeExpenseFormComponent>;

  beforeEach(async(() => {
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
