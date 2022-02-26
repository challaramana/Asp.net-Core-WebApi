import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/_models/user';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  user: User[] = [];
  constructor(private employeeService: EmployeeService,
     private router: Router,private toastr:ToastrService) {
    this.getAllEmployes();
  }

  ngOnInit(): void {
  }


  getAllEmployes() {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.user = data;
      console.log(data)
    })
  }
  updateEmployee(i: any) {
    console.log(i);
    this.router.navigateByUrl('/member/' + i);
  }
  deleteEmployee(i: any) {
    this.employeeService.deleteEmployee(i).subscribe(data => {
      this.toastr.success('employee has been deleted');
      this.getAllEmployes();
      this.router.navigateByUrl('');
    })
  }
}
