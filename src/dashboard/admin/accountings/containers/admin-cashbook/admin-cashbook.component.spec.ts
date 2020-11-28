import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminCashbookComponent } from './admin-cashbook.component';

describe('AdminCashbookComponent', () => {
  let component: AdminCashbookComponent;
  let fixture: ComponentFixture<AdminCashbookComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCashbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCashbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
