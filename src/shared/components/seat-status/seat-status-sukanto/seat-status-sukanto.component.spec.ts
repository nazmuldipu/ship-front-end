import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeatStatusSukantoComponent } from './seat-status-sukanto.component';

describe('SeatStatusSukantoComponent', () => {
  let component: SeatStatusSukantoComponent;
  let fixture: ComponentFixture<SeatStatusSukantoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatStatusSukantoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatStatusSukantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
