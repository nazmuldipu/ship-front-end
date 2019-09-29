import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSukantababuPrintComponent } from './ticket-sukantababu-print.component';

describe('TicketSukantababuPrintComponent', () => {
  let component: TicketSukantababuPrintComponent;
  let fixture: ComponentFixture<TicketSukantababuPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketSukantababuPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketSukantababuPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
