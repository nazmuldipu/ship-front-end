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
}
