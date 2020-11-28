import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CashbookComponent } from './cashbook.component';

describe('CashbookComponent', () => {
  let component: CashbookComponent;
  let fixture: ComponentFixture<CashbookComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CashbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
