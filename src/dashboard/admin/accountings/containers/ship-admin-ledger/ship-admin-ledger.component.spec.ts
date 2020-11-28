import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShipAdminLedgerComponent } from './ship-admin-ledger.component';

describe('ShipAdminLedgerComponent', () => {
  let component: ShipAdminLedgerComponent;
  let fixture: ComponentFixture<ShipAdminLedgerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipAdminLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipAdminLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
