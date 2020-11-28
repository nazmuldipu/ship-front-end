import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssignShipAdminComponent } from './assign-ship-admin.component';

describe('AssignShipAdminComponent', () => {
  let component: AssignShipAdminComponent;
  let fixture: ComponentFixture<AssignShipAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignShipAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignShipAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
