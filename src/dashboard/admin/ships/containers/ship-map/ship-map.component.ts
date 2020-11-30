import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/service/ship.service';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'app-ship-map',
  templateUrl: './ship-map.component.html',
  styleUrls: ['./ship-map.component.scss']
})
export class ShipMapComponent implements OnInit {
  public options: any;
  ship: Ship;
  shipMap: Map<Date, boolean>;
  loading = false;

  constructor(private shipService: ShipService) { }

  ngOnInit() {
    this.setDateRanges()
  }

  setDateRanges() {
    const cin = new Date();
    const cout = new Date();
    cout.setDate(cout.getDate() + 14);
    const max = new Date();
    max.setDate(max.getDate() + 180);
    this.options = {
      autoApply: true,
      locale: { format: 'DD MMM,YY' },
      minDate: cin,
      maxDate: max,
      startDate: cin,
      endDate: cout,
      alwaysShowCalendars: false
    };
  }

  selectedDate(value: any) {
    this.options.startDate = value.start._d;
    this.options.endDate = value.end._d;
    if (this.ship) {
      this.loadShipMap(this.ship.id, this.options.startDate, this.options.endDate);
    }
  }

  onSelectShip(ship) {
    this.ship = ship;
    this.loadShipMap(this.ship.id, this.options.startDate, this.options.endDate);
  }

  async loadShipMap(shipId: number, sd: Date, ed: Date) {
    const startDate = this.getDateString(sd);
    const endDate = this.getDateString(ed);
    this.shipMap = null;
    this.loading = true;
    try {
      this.shipMap = await this.shipService.getAdminShipMap(shipId, startDate, endDate).toPromise();
    } catch (err) { console.log(err) }
    this.loading = false;
    // await this.shipService.getAdminShipMap(shipId, startDate, endDate).subscribe(data => {
    //   this.shipMap = data;
    // })
  }

  getDateString(date: Date): string {
    const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return (
      date.getFullYear() + '-' + month + '-' + day
    );
  }

  async onAction(shipId, date, value) {
    try {
      await this.shipService.updateAdminShipMap(shipId, date, value).toPromise();
      this.loadShipMap(shipId, this.options.startDate, this.options.endDate);
    } catch (err) { console.log(err) }

    // await this.shipService.updateAdminShipMap(shipId, date, value).subscribe(data => {
    //   this.loadShipMap(shipId, this.options.startDate, this.options.endDate);
    // })
  }

}
