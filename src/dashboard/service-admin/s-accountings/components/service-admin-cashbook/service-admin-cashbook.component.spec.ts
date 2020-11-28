import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceAdminCashbookComponent } from './service-admin-cashbook.component';

describe('ServiceAdminCashbookComponent', () => {
  let component: ServiceAdminCashbookComponent;
  let fixture: ComponentFixture<ServiceAdminCashbookComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAdminCashbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAdminCashbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
