import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminPriceMapFormComponent } from './admin-price-map-form.component';

describe('AdminPriceMapFormComponent', () => {
  let component: AdminPriceMapFormComponent;
  let fixture: ComponentFixture<AdminPriceMapFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPriceMapFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPriceMapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
