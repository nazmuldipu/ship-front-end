import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/service/ship.service';
import { ShipPage } from 'src/shared/models/ship.model';
import { SeatsService } from 'src/service/seats.service';
import { Seat } from 'src/shared/models/seat.model';
import { Category } from 'src/shared/models/category.model';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  detailsId;
  category: Category;
  seatList: Seat[];
  selectedSeat: Seat[] = [];
  filteredSeatList: Seat[];
  categoryList: Category[] = [];
  shipPage: ShipPage;
  seatLoading = false;
  dd;

  constructor(
    private shipService: ShipService,
    private seatService: SeatsService
  ) {}

  ngOnInit() {
    let date = new Date();
    this.dd = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    this.getAdminShipPage();
  }

  async getAdminShipPage(page: number = 0) {
    await this.shipService.getAdminShipPage(page).subscribe(data => {
      this.shipPage = data;
    });
  }

  async getAdminSeatList(shipId) {
    this.seatLoading = true;
    await this.seatService
      .getAdminAvailableSeatListByShiplId(shipId, this.makeDateString(this.dd))
      .subscribe(data => {
        this.seatList = data;
        this.seatLoading = false;
        this.categoryList = [];
        this.seatList.forEach(s => {
          const cat: Category = s.category;
          const c = this.categoryList.find(ct => ct.id == cat.id);
          if (!c) {
            this.categoryList.push(cat);
          }
        });
        this.onSelectCategory(
          this.categoryList[this.categoryList.length - 1].id
        );
      });
  }

  adjustDay(day) {
    let date = new Date(this.dd.year, this.dd.month - 1, this.dd.day + day);
    const value = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    this.dd = value;
  }

  onDetails(shipId) {
    if (this.detailsId != shipId) {
      this.detailsId = shipId;
      this.getAdminSeatList(shipId);
    } else {
      this.detailsId = null;
      this.seatList = null;
    }
  }

  onSelectCategory(categoryId: number) {
    this.category = this.categoryList.find(ca => ca.id == categoryId);
    this.filterSeatList(categoryId);
  }

  filterSeatList(categoryId) {
    this.filteredSeatList = [];
    this.seatList.forEach(seat => {
      if (seat.category.id == categoryId) {
        this.filteredSeatList.push(seat);
      }
    });
  }

  onSeatClick(seatId) {
    if (this.selectedSeat.some(e => e.id === seatId)) {
      const i = this.selectedSeat.findIndex(s => s.id == seatId);
      this.selectedSeat.splice(i, 1);
    } else {
      const seat = this.filteredSeatList.find(se => se.id == seatId);
      if (seat.available) {
        this.selectedSeat.push(seat);
      }
    }
  }

  selectedSeatContainSeatId(seatId): boolean {
    return this.selectedSeat.some(e => e.id == seatId);
  }

  makeDateString(date) {
    const dateString = date.year + '-' + (date.month + 1) + '-' + date.day;
    return dateString;
  }

  getTotal() {
    let total = 0;
    this.selectedSeat.forEach(s => {
      total += s.category.fare - s.category.discount;
    });
    return total;
  }
}
