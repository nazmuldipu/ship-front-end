import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeatPlanSukantoComponent } from './seat-plan-sukanto.component';

describe('SeatPlanSukantoComponent', () => {
  let component: SeatPlanSukantoComponent;
  let fixture: ComponentFixture<SeatPlanSukantoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatPlanSukantoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatPlanSukantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
