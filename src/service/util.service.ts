import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() {}

  // Get String yyyy-MM-dd date list between two dates
  getDatesBetween(startDate: Date, endDate: Date) {
    const startD = new Date(startDate);
    const endD = new Date(endDate);
    endD.setDate(endD.getDate() - 1);
    let dateArray: string[] = [];
    while (startD.getTime() <= endD.getTime()) {
      const value =
        startD.getFullYear() +
        '-' +
        (startD.getMonth() + 1) +
        '-' +
        startD.getDate();
      dateArray.push(value);
      startD.setDate(startD.getDate() + 1);
    }
    return dateArray;
  }

  getDateString(date: Date): string {
    return (
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    );
  }

  getDateStringFromDateObj(date) {
    return date.year + '-' + date.month + '-' + date.day;
  }

  getTimeStringFromTimeObj(time) {
    return time.hour + ':' + time.minute;
  }

  dynamicSortObject(property) {
    let prop = property.split('.');
    let len = prop.length;

    if (len < 2) {
      var sortOrder = 1;
      if (property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function(a, b) {
        var result =
          a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        return result * sortOrder;
      };
    } else if (len >= 2) {
      return function(a, b) {
        var i = 0;
        while (i < len) {
          a = a[prop[i]];
          b = b[prop[i]];
          i++;
        }
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      };
    }
  }
}
