import { TestBed, getTestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { Http, HttpModule } from '@angular/http';
import { Employee } from '../Models/Employee';
import { EmployeeBenfitsService } from "./EmployeeBenfits.Service";
import { HttpResponse } from "@angular/common/http";

describe("EmployeeBenfitsService", async() => {
  let injector: TestBed;

  let service: EmployeeBenfitsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientTestingModule],
      providers: [{ provide: 'BASE_URL', useValue: '/' }, EmployeeBenfitsService],
    });

    injector = getTestBed();
    service = injector.get(EmployeeBenfitsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  it("getEmployeeList() should return data", () => {
    const dummyUserListResponse: Employee[] = [{
      employeeId: 123458,
      firstName: "Shanthi",
      lastName: "Nukala",
      dob: "",
      phoneNumber: "string",
      addressLine: "string",
      city: "string",
      province: "string",
      country: "string",
      zipcode: "string",
      dependentsCount: 698524,
    },
    {
      employeeId: 123456,
      firstName: "Shanthi",
      lastName: "Nukala",
      dob: "",
      phoneNumber: "string",
      addressLine: "string",
      city: "string",
      province: "string",
      country: "string",
      zipcode: "string",
      dependentsCount: 698524,
      }];
    let baseUrl = "api/employeebenfits";
    let response;
    service.getEmployees().subscribe((res) => {
      response = res;
    });
    const req = httpMock.expectOne(baseUrl);
    //console.log('req is ' + req);
    expect(req.request.method).toEqual("GET");
    req.flush(dummyUserListResponse);
    expect(response).toEqual(dummyUserListResponse);
  });
});
