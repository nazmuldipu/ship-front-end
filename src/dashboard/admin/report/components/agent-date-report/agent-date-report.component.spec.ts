import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgentDateReportComponent } from './agent-date-report.component';

describe('AgentDateReportComponent', () => {
  let component: AgentDateReportComponent;
  let fixture: ComponentFixture<AgentDateReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentDateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentDateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
