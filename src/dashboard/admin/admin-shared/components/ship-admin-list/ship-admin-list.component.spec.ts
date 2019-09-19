import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipAdminListComponent } from './ship-admin-list.component';

describe('ShipAdminListComponent', () => {
  let component: ShipAdminListComponent;
  let fixture: ComponentFixture<ShipAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
