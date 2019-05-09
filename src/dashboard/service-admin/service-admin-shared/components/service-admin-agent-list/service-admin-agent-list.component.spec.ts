import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdminAgentListComponent } from './service-admin-agent-list.component';

describe('ServiceAdminAgentListComponent', () => {
  let component: ServiceAdminAgentListComponent;
  let fixture: ComponentFixture<ServiceAdminAgentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAdminAgentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAdminAgentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
