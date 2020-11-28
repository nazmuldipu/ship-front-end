import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShipAdminListComponent } from './ship-admin-list.component';

describe('ShipAdminListComponent', () => {
  let component: ShipAdminListComponent;
  let fixture: ComponentFixture<ShipAdminListComponent>;

  beforeEach(waitForAsync(() => {
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
