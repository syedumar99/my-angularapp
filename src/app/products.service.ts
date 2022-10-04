import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from './products';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url : string = "http://localhost:8084/product";
  constructor(private http : HttpClient) { }
  getProducts() : Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.url);
  }
}