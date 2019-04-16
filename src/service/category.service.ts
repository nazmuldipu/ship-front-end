import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryPage } from 'src/shared/models/category.model';
import { RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  serviceUrl = 'api/v1/category';
  serviceAdminUrl = 'api/v1/admin/category';

  constructor(private dataSource: RestDataService) {}

  getCategoryByShiplId(
    hotelId: number,
    page: number
  ): Observable<CategoryPage> {
    const pageUrl = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/${hotelId}`,
      null,
      true,
      pageUrl
    );
  }
}
