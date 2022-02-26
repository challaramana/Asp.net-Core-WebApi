import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmployeeService } from 'src/services/employee.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  model: User = {
    empId: 0,
    name: '',
    email: '',
    mobileNumber: ''
  };
  addEmployeeFormFg!: FormGroup;
  addEmployeeForm!: NgForm;
 
  constructor(private employeeService: EmployeeService,
    private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.initalizeForm();
  }
  initalizeForm(){
    this.addEmployeeFormFg = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        mobileNumber: new FormControl('', Validators.required)
      }
    );
  }
  
  addEmployee() {
    console.log(this.model);
    this.employeeService.addEmployee(this.model).subscribe((data: any) => {
      this.router.navigateByUrl('/');
      this.toastr.success('employee has been added');
      console.log(data)
    }, (error: any) => {
      console.log(error);
    });
  }
  get email() { return this.addEmployeeFormFg.get('email'); }
  get name() { return this.addEmployeeFormFg.get('name'); }
  get mobileNumber() { return this.addEmployeeFormFg.get('mobileNumber'); }
}

