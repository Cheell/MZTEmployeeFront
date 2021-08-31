import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployeeResponce } from '../chart/model/chart.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly serverLink = 'https://localhost:44303/EmployeeData/';

  constructor(private http: HttpClient) {}

  get2018data() {
    return this.http.get<IEmployeeResponce>(this.serverLink +  'GetEmployee2018Data')
  }
  get2019data() {
    return this.http.get<IEmployeeResponce>(this.serverLink +  'GetEmployee2019Data')
  }
  get2020data() {
    return this.http.get<IEmployeeResponce>(this.serverLink +  'GetEmployee2020Data')
  }
}
