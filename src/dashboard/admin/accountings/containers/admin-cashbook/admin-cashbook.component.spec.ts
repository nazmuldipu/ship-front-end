import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCashbookComponent } from './admin-cashbook.component';

describe('AdminCashbookComponent', () => {
  let component: AdminCashbookComponent;
  let fixture: ComponentFixture<AdminCashbookComponent>;

  beforeEach(async(() => {
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
