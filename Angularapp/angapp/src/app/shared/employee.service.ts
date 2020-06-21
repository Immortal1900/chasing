import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable,of, from, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
selectedEmployee: Employee;
employees: Employee[];
readonly baseURL='http://localhost:3000/employees';
  constructor(private http: HttpClient) { }
  postEmployee(emp: Employee){
    return this.http.post(this.baseURL,emp);
  }
  getallEmployee(emp: Employee){
    return this.http.get(this.baseURL);
  }
}
