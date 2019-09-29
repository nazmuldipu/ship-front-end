import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Seat } from 'src/shared/models/seat.model';

@Component({
  selector: 'ticket-sukantababu-print',
  templateUrl: './ticket-sukantababu-print.component.html',
  styleUrls: ['./ticket-sukantababu-print.component.scss']
})
export class TicketSukantababuPrintComponent {
  @Input() ticket;
  @Input() short: boolean;
  @Output() close = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  onPrint() {
    (window as any).print();
  }

  onClose() {
    this.close.emit(true);
  }
}
