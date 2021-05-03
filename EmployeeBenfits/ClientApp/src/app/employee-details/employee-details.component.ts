import { Component, Inject, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { Employee } from "../Models/Employee";
import { EmployeeBenfitsService } from "../Services/EmployeeBenfits.Service";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
})
export class EmployeeDetailsComponent implements OnInit {
  myControl = new FormControl();
  isRecordAlreadyExists: boolean = false;
  provinceOptions: string[] = [
    "California",
    "Texas",
    "Florida",
    "Alaska",
    "Hawaii",
    "Pennsylvania",
    "Virginia",
  ];
  filteredOptions: Observable<string[]>;
  showSuccessMsg: boolean = false;
  showFailureMsg: boolean = false;
  employee: Employee;
  employeeRegisterForm: FormGroup;
  submitted = false;
  successStatus: number = 200;
  recordAlreadyExistsStatus: number = 406;

  constructor(
    private service: EmployeeBenfitsService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
    this.employeeRegisterForm = this.formbuilder.group({
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
      dob: [
        "",
        [
          Validators.required,
          Validators.pattern(
            /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
          ),
        ],
      ],
      phoneNumber: [
        "",
        [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      ],
      addressLine: ["", Validators.required],
      city: ["", Validators.required],
      province: ["", Validators.required],
      state: [""],
      country: ["", Validators.required],
      zipCode: ["", [Validators.required, Validators.pattern("^[0-9]")]],
      dependentsCount: ["", Validators.required],
    });
  }

  get f() {
    return this.employeeRegisterForm.controls;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.provinceOptions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  save() {
    this.service.postEmployee(this.employee).subscribe(
      (data) => {
        if (data.status == this.successStatus) {
          console.log(data);
          this.showSuccessMsg = true;
          this.isRecordAlreadyExists = false;
        } else if (data.status = this.recordAlreadyExistsStatus) {
          this.isRecordAlreadyExists = true;
          this.showFailureMsg = true
        }
      },
      (error) => {
        this.showFailureMsg = true;
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  onReset() {
    this.submitted = false;
    this.showFailureMsg = false;
    this.showSuccessMsg = false;
    this.isRecordAlreadyExists = false;
    this.employeeRegisterForm.reset();
  }
}
