import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tiket-baycruise-print',
  templateUrl: './tiket-baycruise-print.component.html',
  styleUrls: ['./tiket-baycruise-print.component.scss']
})
export class TiketBaycruisePrintComponent implements OnInit {
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
