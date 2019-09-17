import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignShipAdminComponent } from './assign-ship-admin.component';

describe('AssignShipAdminComponent', () => {
  let component: AssignShipAdminComponent;
  let fixture: ComponentFixture<AssignShipAdminComponent>;

  beforeEach(async(() => {
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
