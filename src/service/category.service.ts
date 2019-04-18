import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryPage, Category } from 'src/shared/models/category.model';
import { RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  serviceUrl = 'api/v1/category';
  serviceAdminUrl = 'api/v1/admin/category';

  constructor(private dataSource: RestDataService) {}

  saveAdminCategory(category: Category, shipId: number): Observable<Category> {
    return this.dataSource.sendRequest(
      RequestMethod.Post,
      this.serviceAdminUrl + `/${shipId}`,
      category,
      true,
      null
    );
  }

  getAdminCategoryByShiplId(
    shipId: number,
    page: number
  ): Observable<CategoryPage> {
    const pageUrl = page === null ? '' : `page=${page}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/${shipId}`,
      null,
      true,
      pageUrl
    );
  }

  getAdminCategoryListByShiplId(shipId: number): Observable<Category[]> {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/list/${shipId}`,
      null,
      true,
      null
    );
  }

  getAdminCategory(categoryId: number): Observable<Category> {
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/id/${categoryId}`,
      null,
      true,
      null
    );
  }

  updateAdminCategory(
    shipId: number,
    categoryId: number,
    category: Category
  ): Observable<Category> {
    return this.dataSource.sendRequest(
      RequestMethod.Put,
      this.serviceAdminUrl + `/${shipId}/category/${categoryId}`,
      category,
      true,
      null
    );
  }

  deleteAdminCategory(id: number): Observable<any> {
    return this.dataSource.sendRequest(
      RequestMethod.Delete,
      this.serviceAdminUrl + `/${id}`,
      null,
      true,
      null
    );
  }

  getAdminDiscountMap(
    id: number,
    startDate: string,
    endDate: string
  ): Observable<Map<Date, number>> {
    const param = `startDate=${startDate}&endDate=${endDate}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Get,
      this.serviceAdminUrl + `/discountMap/${id}`,
      null,
      true,
      param
    );
  }

  updateAdminDiscountMap(
    id: number,
    startDate,
    endDate,
    amount: number
  ): Observable<Map<string, string>> {
    const param = `startDate=${startDate}&endDate=${endDate}&amount=${amount}&`;
    return this.dataSource.sendRequest(
      RequestMethod.Patch,
      this.serviceAdminUrl + `/discountMap/${id}`,
      null,
      true,
      param
    );
  }
}
