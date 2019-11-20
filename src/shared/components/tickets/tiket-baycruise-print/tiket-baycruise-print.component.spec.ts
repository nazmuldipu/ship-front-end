import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiketBaycruisePrintComponent } from './tiket-baycruise-print.component';

describe('TiketBaycruisePrintComponent', () => {
  let component: TiketBaycruisePrintComponent;
  let fixture: ComponentFixture<TiketBaycruisePrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiketBaycruisePrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiketBaycruisePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});