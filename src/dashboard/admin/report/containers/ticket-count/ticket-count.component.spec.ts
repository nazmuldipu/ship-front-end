import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TicketCountComponent } from './ticket-count.component';

describe('TicketCountComponent', () => {
  let component: TicketCountComponent;
  let fixture: ComponentFixture<TicketCountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
