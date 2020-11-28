import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddAgentComponent } from './add-agent.component';

describe('AddAgentComponent', () => {
  let component: AddAgentComponent;
  let fixture: ComponentFixture<AddAgentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
