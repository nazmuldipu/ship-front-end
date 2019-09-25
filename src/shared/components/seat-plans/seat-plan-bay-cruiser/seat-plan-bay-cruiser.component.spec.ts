import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatPlanBayCruiserComponent } from './seat-plan-bay-cruiser.component';

describe('SeatPlanBayCruiserComponent', () => {
  let component: SeatPlanBayCruiserComponent;
  let fixture: ComponentFixture<SeatPlanBayCruiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatPlanBayCruiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatPlanBayCruiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
