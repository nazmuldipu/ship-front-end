import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShipLedgerComponent } from './ship-ledger.component';

describe('ShipLedgerComponent', () => {
  let component: ShipLedgerComponent;
  let fixture: ComponentFixture<ShipLedgerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
