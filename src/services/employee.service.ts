import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/_models/user';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getEmployee(id: string) {
    return this.http.get<User>(this.baseUrl + 'Employee/GetEmployeeDetailsById/' + id, {});
  }

  addEmployee(user: User) {
    console.log(user)
    return this.http.post<User>(this.baseUrl + 'Employee/CreateEmplyoee', user);
  }
  getAllEmployees() {
    return this.http.get<User[]>(this.baseUrl + 'Employee/GetEmployeeDetiails', {});
  }
  updateEmployee(user: User) {
    console.log(user);
    return this.http.put<User[]>(this.baseUrl + 'Employee/UpdateEmployee', user);
  }
  deleteEmployee(id: string) {
    console.log(id);
    return this.http.delete<User[]>(this.baseUrl + 'Employee/DeleteEmployee/' + id, {});
  }
}
