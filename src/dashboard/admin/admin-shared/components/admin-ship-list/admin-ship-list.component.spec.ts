import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminShipListComponent } from './admin-hotel-list.component';

describe('AdminShipListComponent', () => {
  let component: AdminShipListComponent;
  let fixture: ComponentFixture<AdminShipListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AdminShipListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
