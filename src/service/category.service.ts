import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryPage, Category } from 'src/shared/models/category.model';
import { HttpParams } from '@angular/common/http';
//import { RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  serviceUrl = 'api/v1/category';
  serviceAdminUrl = 'api/v1/admin/category';

  constructor(private dataSource: RestDataService) { }

  saveAdminCategory(category: Category, shipId: number): Observable<Category> {
    return this.dataSource.sendRequest(
      'POST',
      this.serviceAdminUrl + `/${shipId}`,
      category,
      true,
      null
    );
  }

  getAdminCategoryByShiplId(
    shipId: number,
    page: number = 0
  ): Observable<CategoryPage> {
    const param = new HttpParams().set('page', page.toString());
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/${shipId}`,
      null,
      true,
      param
    );
  }

  getAdminCategoryListByShiplId(shipId: number): Observable<Category[]> {
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/list/${shipId}`,
      null,
      true,
      null
    );
  }

  getAdminCategory(categoryId: number): Observable<Category> {
    return this.dataSource.sendRequest(
      'GET',
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
      'PUT',
      this.serviceAdminUrl + `/${shipId}/category/${categoryId}`,
      category,
      true,
      null
    );
  }

  deleteAdminCategory(id: number): Observable<any> {
    return this.dataSource.sendRequest(
      'DELETE',
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
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.dataSource.sendRequest(
      'GET',
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
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('amount', amount.toString());
    return this.dataSource.sendRequest(
      'PATCH',
      this.serviceAdminUrl + `/discountMap/${id}`,
      null,
      true,
      param
    );
  }


  getAdminPriceMap(id: number, startDate: string, endDate: string
  ): Observable<Map<Date, number>> {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.dataSource.sendRequest(
      'GET',
      this.serviceAdminUrl + `/priceMap/${id}`,
      null,
      true,
      param
    );
  }

  updateAdminPriceMap(id: number, startDate, endDate, amount: number): Observable<Map<string, string>> {
    const param = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('amount', amount.toString());
    return this.dataSource.sendRequest(
      'PATCH',
      this.serviceAdminUrl + `/priceMap/${id}`,
      null,
      true,
      param
    );
  }
}
