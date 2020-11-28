import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminDiscountMapFormComponent } from './admin-discount-map-form.component';

describe('AdminDiscountMapFormComponent', () => {
  let component: AdminDiscountMapFormComponent;
  let fixture: ComponentFixture<AdminDiscountMapFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDiscountMapFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDiscountMapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
