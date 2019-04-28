import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCashbookTableComponent } from './admin-cashbook-table.component';

describe('AdminCashbookTableComponent', () => {
  let component: AdminCashbookTableComponent;
  let fixture: ComponentFixture<AdminCashbookTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCashbookTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCashbookTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
