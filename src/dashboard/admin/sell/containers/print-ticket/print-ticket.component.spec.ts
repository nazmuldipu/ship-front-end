import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrintTicketComponent } from './print-ticket.component';

describe('PrintTicketComponent', () => {
  let component: PrintTicketComponent;
  let fixture: ComponentFixture<PrintTicketComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
