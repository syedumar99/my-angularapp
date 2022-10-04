import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './myAPI';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MyAPIService {
  private url : string = "http://localhost:8080/products";
  constructor(private http : HttpClient) { }
  getProducts() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url);
  }
}