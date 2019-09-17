import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatPlanOtherComponent } from './seat-plan-other.component';

describe('SeatPlanOtherComponent', () => {
  let component: SeatPlanOtherComponent;
  let fixture: ComponentFixture<SeatPlanOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatPlanOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatPlanOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
