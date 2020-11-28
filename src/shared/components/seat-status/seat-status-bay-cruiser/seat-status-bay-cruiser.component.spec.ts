import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeatStatusBayCruiserComponent } from './seat-status-bay-cruiser.component';

describe('SeatStatusBayCruiserComponent', () => {
  let component: SeatStatusBayCruiserComponent;
  let fixture: ComponentFixture<SeatStatusBayCruiserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatStatusBayCruiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatStatusBayCruiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
