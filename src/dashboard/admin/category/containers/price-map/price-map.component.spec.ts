import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PriceMapComponent } from './price-map.component';

describe('PriceMapComponent', () => {
  let component: PriceMapComponent;
  let fixture: ComponentFixture<PriceMapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
