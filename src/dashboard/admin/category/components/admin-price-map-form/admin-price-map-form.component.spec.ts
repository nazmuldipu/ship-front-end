import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPriceMapFormComponent } from './admin-price-map-form.component';

describe('AdminPriceMapFormComponent', () => {
  let component: AdminPriceMapFormComponent;
  let fixture: ComponentFixture<AdminPriceMapFormComponent>;

  beforeEach(async(() => {
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
