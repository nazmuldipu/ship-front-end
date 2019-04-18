import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountMapComponent } from './discount-map.component';

describe('DiscountMapComponent', () => {
  let component: DiscountMapComponent;
  let fixture: ComponentFixture<DiscountMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
