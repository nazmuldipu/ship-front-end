import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDateReportRangeComponent } from './agent-date-report-range.component';

describe('AgentDateReportRangeComponent', () => {
  let component: AgentDateReportRangeComponent;
  let fixture: ComponentFixture<AgentDateReportRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentDateReportRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentDateReportRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
