import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceMapComponent } from './price-map.component';

describe('PriceMapComponent', () => {
  let component: PriceMapComponent;
  let fixture: ComponentFixture<PriceMapComponent>;

  beforeEach(async(() => {
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
