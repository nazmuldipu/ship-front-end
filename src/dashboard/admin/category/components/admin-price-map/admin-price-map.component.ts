import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { Category } from 'src/shared/models/category.model';

@Component({
  selector: 'admin-price-map',
  templateUrl: './admin-price-map.component.html',
  styleUrls: ['./admin-price-map.component.scss']
})
export class AdminPriceMapComponent implements OnChanges {
  @Input() reload: boolean;
  @Input() category: Category;
  @Output() onEdit = new EventEmitter<any>();

  priceMap: Map<Date, number>;

  public options: any;
  public daterange: any = {};
  public loading = false;

  constructor(private categoryService: CategoryService) {
    this.setDateRanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.category && this.category && this.category.id) {
      this.getAdminPriceMap(
        this.category.id,
        this.daterange.startDate,
        this.daterange.endDate
      );
    }
    if (changes.reload) {
      if (this.category) {
        this.getAdminPriceMap(
          this.category.id,
          this.daterange.startDate,
          this.daterange.endDate
        );
      }
    }
  }

  setDateRanges() {
    this.daterange.startDate = new Date();
    this.daterange.endDate = new Date();
    this.daterange.endDate.setDate(this.daterange.endDate.getDate() + 10);
    const maxDate = new Date();
    maxDate.setDate(this.daterange.startDate.getDate() + 90);
    this.options = {
      autoApply: true,
      locale: { format: 'DD MMM,YY' },
      minDate: this.daterange.startDate,
      maxDate: maxDate,
      startDate: this.daterange.startDate,
      endDate: this.daterange.endDate,
      alwaysShowCalendars: false
    };
  }

  selectedPricetDate(value: any) {
    this.daterange.startDate = value.start._d as Date;
    this.daterange.endDate = value.end._d as Date;
    this.daterange.label = value.label;
    this.getAdminPriceMap(
      this.category.id,
      this.daterange.startDate,
      this.daterange.endDate
    );
  }

  async getAdminPriceMap(id: number, startDate, endDate) {
    this.loading = true;
    const ciDate = this.makeDateString(startDate);
    const coDate = this.makeDateString(endDate);
    await this.categoryService
      .getAdminPriceMap(id, ciDate, coDate)
      .subscribe(data => {
        this.priceMap = data;
        this.loading = false;
      });
  }

  makeDateString(date: Date) {
    const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return (
      date.getFullYear() + '-' + month + '-' + day
    );
  }

  onEditPrice(id) {
    this.onEdit.emit(id);
  }

}
