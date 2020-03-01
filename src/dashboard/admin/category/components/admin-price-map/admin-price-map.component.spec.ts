import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPriceMapComponent } from './admin-price-map.component';

describe('AdminPriceMapComponent', () => {
  let component: AdminPriceMapComponent;
  let fixture: ComponentFixture<AdminPriceMapComponent>;

  beforeEach(async(() => {
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
