import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayShipFormComponent } from './pay-ship-form.component';

describe('PayShipFormComponent', () => {
  let component: PayShipFormComponent;
  let fixture: ComponentFixture<PayShipFormComponent>;

  beforeEach(async(() => {
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
