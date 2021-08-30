import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../chart/model/chart.model';

@Injectable({
  providedIn: 'root'
})
export class EmploeeService {
  private readonly serverLink = 'https://localhost:44303/EmployeeData/';

  constructor(private http: HttpClient) {}

  get2018data() {
    return this.http.get<IEmployee[]>(this.serverLink +  'GetEmployee2018Data')
  }
}
