import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipAdminLedgerComponent } from './ship-admin-ledger.component';

describe('ShipAdminLedgerComponent', () => {
  let component: ShipAdminLedgerComponent;
  let fixture: ComponentFixture<ShipAdminLedgerComponent>;

  beforeEach(async(() => {
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
