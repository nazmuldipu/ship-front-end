import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeatFormComponent } from './seat-form.component';

describe('SeatFormComponent', () => {
  let component: SeatFormComponent;
  let fixture: ComponentFixture<SeatFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
