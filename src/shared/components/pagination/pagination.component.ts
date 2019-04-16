import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent{
  @Input() page: any;
  @Input() short: boolean;

  @Output() getPage = new EventEmitter<number>();

  startPage: number;
  endPage: number;

  constructor() {}

  onPaginate(page: number) {
    this.getPage.emit(page);
  }

  counter(currentPage: number, totalPages: number) {
    let startPage = 0;
    let length = 10;
    if (totalPages < 10) {
      length = totalPages;
    } else {
      if (currentPage < 4) {
        startPage = 0;
      } else if (currentPage + 5 >= totalPages) {
        startPage = totalPages - 10;
      } else {
        startPage = currentPage - 4;
      }
    }

    return Array.from({ length: length }, (v, k) => k + startPage);
  }
}
