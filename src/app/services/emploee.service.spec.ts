import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './emploee.service';

describe('EmployeeService', () => {
  let empService: EmployeeService, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        EmployeeService,
      ]
    });
    empService = TestBed.inject(EmployeeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(empService).toBeTruthy();
  });

  it('should retrieve 2018 Data', () => {
    empService.get2018data()
      .subscribe(emps => {
        expect(emps).toBeTruthy('No EmployeeResponses returned');
        expect(emps.employeesData.length).toBe(12, 'Incorrect number of months');
        expect(emps.year).toBe('2018');
      })

    const req = httpTestingController.expectOne('https://localhost:44303/EmployeeData/GetEmployee2018Data');

    expect(req.request.method).toEqual("GET");

    req.flush({
        "employeesData": [ 35,19,18,6,46,36,30,29,49,3,48,46],
        "year": "2018"
    });
  })

  it('should retrieve 2019 Data', () => {
    empService.get2019data()
      .subscribe(emps => {
        expect(emps).toBeTruthy('No EmployeeResponses returned');
        expect(emps.employeesData.length).toBe(12, 'Incorrect number of months');
        expect(emps.year).toBe('2019');
        expect(emps.employeesData).toContain(11);
      })

    const req = httpTestingController.expectOne('https://localhost:44303/EmployeeData/GetEmployee2019Data');



    expect(req.request.method).toEqual("GET");

    req.flush({
        "employeesData": [11,40,41,20,43,20,27,25,36,28,7,38],
        "year": "2019"
    });
  })

  it('should retrieve 2020 Data', () => {
    empService.get2020data()
      .subscribe(emps => {
        expect(emps).toBeTruthy('No EmployeeResponses returned');
        expect(emps.employeesData.length).toBe(12, 'Incorrect number of months');
        expect(emps.year).toBe('2020', 'Incorrect Year');
        expect(Object.keys(emps)).toEqual(['employeesData','year'], 'Response Type Fail');
      })

    const req = httpTestingController.expectOne('https://localhost:44303/EmployeeData/GetEmployee2020Data');



    expect(req.request.method).toEqual("GET");

    req.flush({
        "employeesData": [ 19,22,5,8,12,14,21,4,41,11,44,4],
        "year": "2020"
    })
  })



})
