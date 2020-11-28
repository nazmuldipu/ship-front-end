import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminPriceMapComponent } from './admin-price-map.component';

describe('AdminPriceMapComponent', () => {
  let component: AdminPriceMapComponent;
  let fixture: ComponentFixture<AdminPriceMapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPriceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPriceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
