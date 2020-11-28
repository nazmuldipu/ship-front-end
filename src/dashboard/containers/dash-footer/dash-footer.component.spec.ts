import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashFooterComponent } from './dash-footer.component';

describe('DashFooterComponent', () => {
  let component: DashFooterComponent;
  let fixture: ComponentFixture<DashFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
