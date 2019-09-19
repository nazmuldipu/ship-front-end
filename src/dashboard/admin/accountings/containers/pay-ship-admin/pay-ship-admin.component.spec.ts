import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayShipAdminComponent } from './pay-ship-admin.component';

describe('PayShipAdminComponent', () => {
  let component: PayShipAdminComponent;
  let fixture: ComponentFixture<PayShipAdminComponent>;

  beforeEach(async(() => {
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
