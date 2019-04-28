import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayToShipComponent } from './pay-to-ship.component';

describe('PayToShipComponent', () => {
  let component: PayToShipComponent;
  let fixture: ComponentFixture<PayToShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayToShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayToShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
