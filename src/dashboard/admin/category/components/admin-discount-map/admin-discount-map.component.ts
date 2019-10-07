import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { Category } from 'src/shared/models/category.model';

@Component({
  selector: 'admin-discount-map',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './admin-discount-map.component.html',
  styleUrls: ['./admin-discount-map.component.scss']
})
export class AdminDiscountMapComponent implements OnChanges {
  @Input() reload: boolean;
  @Input() category: Category;
  @Output() onEdit = new EventEmitter<any>();

  discountMap: Map<Date, number>;

  public options: any;
  public daterange: any = {};

  constructor(private categoryService: CategoryService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.setDateRanges();
    if (changes.category && this.category && this.category.id) {
      this.getAdminDiscountMap(
        this.category.id,
        this.daterange.startDate,
        this.daterange.endDate
      );
    }
    if (changes.reload) {
      if (this.category) {
        this.getAdminDiscountMap(
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
      locale: { format: 'DD MMM,YY' },
      minDate: this.daterange.startDate,
      maxDate: maxDate,
      startDate: this.daterange.startDate,
      endDate: this.daterange.endDate,
      alwaysShowCalendars: false
    };
  }

  selectedDiscountDate(value: any) {
    this.daterange.startDate = value.start._d as Date;
    this.daterange.endDate = value.end._d as Date;
    this.daterange.label = value.label;
    // if (this.category) {
    this.getAdminDiscountMap(
      this.category.id,
      this.daterange.startDate,
      this.daterange.endDate
    );
    // }
  }

  async getAdminDiscountMap(id: number, startDate, endDate) {
    // this.discountMap = null;
    const ciDate = this.makeDateString(startDate);
    const coDate = this.makeDateString(endDate);
    await this.categoryService
      .getAdminDiscountMap(id, ciDate, coDate)
      .subscribe(data => {
        this.discountMap = data;
      });
  }

  makeDateString(date: Date) {
    const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return (
      date.getFullYear() + '-' + month + '-' + day
    );
    // const dateString =
    //   date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    // return dateString;
  }

  onEditDiscount(id) {
    // console.log(id);
    this.onEdit.emit(id);
  }
}
