import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceAdminShipListComponent } from './service-admin-ship-list.component';

describe('ServiceAdminShipListComponent', () => {
  let component: ServiceAdminShipListComponent;
  let fixture: ComponentFixture<ServiceAdminShipListComponent>;

  beforeEach(waitForAsync(() => {
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
