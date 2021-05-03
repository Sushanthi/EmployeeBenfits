import { Inject, Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BenfitDetails } from "../Models/BenfitDetails";
import { Employee } from "../Models/Employee";

@Injectable()
export class EmployeeBenfitsService {
  private baseUrl: string;
  employee: Employee;
  constructor(private http: Http, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getEmployees(): Observable<any[]> {
    return this.http
      .get(this.baseUrl + "api/employeebenfits")
      .pipe(map((response: any) => response));
  }

  getBenfitsCost(employeeId): Observable<any> {
    return this.http
      .get(this.baseUrl + "api/employeebenfits/" + employeeId)
      .pipe(map((response: any) => response));
  }

  postEmployee(employee: Object): Observable<any> {
    return this.http.post(this.baseUrl + "api/employeebenfits", employee).pipe(map((response: any) => response));
  }
}
