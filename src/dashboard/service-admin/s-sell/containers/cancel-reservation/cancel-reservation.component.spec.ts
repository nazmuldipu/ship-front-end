import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CancelReservationComponent } from './cancel-reservation.component';

describe('CancelReservationComponent', () => {
  let component: CancelReservationComponent;
  let fixture: ComponentFixture<CancelReservationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
