import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PayShipFormComponent } from './pay-ship-form.component';

describe('PayShipFormComponent', () => {
  let component: PayShipFormComponent;
  let fixture: ComponentFixture<PayShipFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PayShipFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayShipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
