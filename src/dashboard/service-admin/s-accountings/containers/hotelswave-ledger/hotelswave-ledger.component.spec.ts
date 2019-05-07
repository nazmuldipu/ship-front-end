import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelswaveLedgerComponent } from './hotelswave-ledger.component';

describe('HotelswaveLedgerComponent', () => {
  let component: HotelswaveLedgerComponent;
  let fixture: ComponentFixture<HotelswaveLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelswaveLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelswaveLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
