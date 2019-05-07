import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdminShipListComponent } from './service-admin-ship-list.component';

describe('ServiceAdminShipListComponent', () => {
  let component: ServiceAdminShipListComponent;
  let fixture: ComponentFixture<ServiceAdminShipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAdminShipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAdminShipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
