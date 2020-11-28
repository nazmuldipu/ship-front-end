import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HotelReportComponent } from './hotel-report.component';

describe('HotelReportComponent', () => {
  let component: HotelReportComponent;
  let fixture: ComponentFixture<HotelReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
