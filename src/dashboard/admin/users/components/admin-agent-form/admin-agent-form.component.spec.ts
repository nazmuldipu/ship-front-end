import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminAgentFormComponent } from './admin-agent-form.component';

describe('AdminAgentFormComponent', () => {
  let component: AdminAgentFormComponent;
  let fixture: ComponentFixture<AdminAgentFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAgentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAgentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
