import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellsReportRangeComponent } from './sells-report-range.component';

describe('SellsReportRangeComponent', () => {
  let component: SellsReportRangeComponent;
  let fixture: ComponentFixture<SellsReportRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellsReportRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellsReportRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});