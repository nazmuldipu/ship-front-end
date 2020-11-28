import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PayShipAdminComponent } from './pay-ship-admin.component';

describe('PayShipAdminComponent', () => {
  let component: PayShipAdminComponent;
  let fixture: ComponentFixture<PayShipAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PayShipAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayShipAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
