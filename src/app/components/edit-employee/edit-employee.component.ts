import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { EmployeeService } from 'src/services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  model: User = {
    empId: 0,
    name: '',
    email: '',
    mobileNumber: ''
  };
  editEmployeeFormFg!: FormGroup;
  editEmployeeForm!: NgForm;
 
  constructor(private employeeService: EmployeeService, private router: Router,
    private route: ActivatedRoute, private toastr:ToastrService) {
    this.getMemberDetails();
  }

  ngOnInit(): void {
  }
  getMemberDetails() {
    this.employeeService.getEmployee(this.route.snapshot.paramMap.get('id') || "{}")
      .subscribe(member => {
        this.model = member;
      });
  }
  editEmployee() {
    this.employeeService.updateEmployee(this.model).subscribe(member => {
      this.router.navigateByUrl('/');
      this.toastr.success('employee has been updated');
      console.log(member);
    });
  }
  get email() { return this.editEmployeeFormFg.get('email'); }
  get name() { return this.editEmployeeFormFg.get('name'); }
  get mobileNumber() { return this.editEmployeeFormFg.get('mobileNumber'); }
}
