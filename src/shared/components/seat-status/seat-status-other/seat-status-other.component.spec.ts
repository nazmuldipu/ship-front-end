import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatStatusOtherComponent } from './seat-status-other.component';

describe('SeatStatusOtherComponent', () => {
  let component: SeatStatusOtherComponent;
  let fixture: ComponentFixture<SeatStatusOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatStatusOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatStatusOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
