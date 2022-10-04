import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url : string = "/assets/data/employees.json";
  constructor(private http : HttpClient) { }
  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);
  }
}
