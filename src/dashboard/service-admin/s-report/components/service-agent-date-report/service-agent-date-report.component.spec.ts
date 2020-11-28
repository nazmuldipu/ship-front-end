import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceAgentDateReportComponent } from './service-agent-date-report.component';

describe('ServiceAgentDateReportComponent', () => {
  let component: ServiceAgentDateReportComponent;
  let fixture: ComponentFixture<ServiceAgentDateReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAgentDateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAgentDateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
