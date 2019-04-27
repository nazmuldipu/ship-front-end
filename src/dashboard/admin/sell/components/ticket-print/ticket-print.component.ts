import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ticket-print',
  templateUrl: './ticket-print.component.html',
  styleUrls: ['./ticket-print.component.scss']
})
export class TicketPrintComponent implements OnInit {
  @Input() ticket;
  @Output() close = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onPrint() {
    (window as any).print();
  }

  onClose() {
    this.close.emit(true);
  }
}
