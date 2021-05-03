import { Component, Inject, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Employee } from "../Models/Employee";
import { EmployeeBenfitsService } from "../Services/EmployeeBenfits.Service";
import { StringLiteral } from "typescript";
import { BenfitDetails } from "../Models/BenfitDetails";

@Component({
  selector: "app-fetch-employeebenfits-costs",
  templateUrl: "./fetch-employeebenfits-cost.component.html",
})
export class FetchEmployeeBenfitsCostComponent implements OnInit {
  employee: Employee[];
  benfits: BenfitDetails;
  showFailureMsg: boolean = false;
  employeeId: number;
  submitted = false;
  fetchBenfitsForm: FormGroup;
  successStatus: number = 200;
  noContentFoundStatus: number = 204;
  constructor(
    private service: EmployeeBenfitsService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.fetchBenfitsForm = this.formbuilder.group({
      employeeId: [
        "",
        [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(4),
          Validators.maxLength(6),
        ],
      ],
      firstName: ["", [Validators.required, Validators.pattern(/^[!^\w\s]+$/)]],
      lastName: ["", [Validators.required, Validators.pattern(/^[!^\w\s]+$/)]],
    });

    this.service.getEmployees().subscribe(
      (data) => {
        console.log(data);
        this.employee = data;
      },
      (error) => console.log(error)
    );
  }

  get f() {
    return this.fetchBenfitsForm.controls;
  }

  onSubmit() {
    this.service.getBenfitsCost(this.fetchBenfitsForm.value.employeeId)
      .subscribe(
        (data) => {
          if (data.status == this.successStatus) {
            this.benfits = data.json();
            this.submitted = true;
            this.showFailureMsg = false;
          } else if (data.status == this.noContentFoundStatus) {
            this.showFailureMsg = true;
          }
        },
        (error) => {
          this.showFailureMsg = true;
        }
      );
  }
}
