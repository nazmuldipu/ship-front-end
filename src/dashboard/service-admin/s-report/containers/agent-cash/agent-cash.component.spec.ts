import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCashComponent } from './agent-cash.component';

describe('AgentCashComponent', () => {
  let component: AgentCashComponent;
  let fixture: ComponentFixture<AgentCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
