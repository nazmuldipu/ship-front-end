import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipMapComponent } from './ship-map.component';

describe('ShipMapComponent', () => {
  let component: ShipMapComponent;
  let fixture: ComponentFixture<ShipMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
