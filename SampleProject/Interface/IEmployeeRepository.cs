using SampleProject.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleProject.Interface
{
    public interface IEmployeeRepository : IRepository<EmployeeDetails>
    {
        //Get all employee details
        List<EmployeeDetails> GetEmployeeDtails();
        //Get employee details by id
        EmployeeDetails GetEmployeeDetailsById(int id);
        // Create/add new employee
        EmployeeDetails CreateEmplyoee(EmployeeDetails employeeDetails);
        //delete emplyoee details
        void DeleteEmployee(int id);
        //edit employee details 
        void Update(EmployeeDetails employeeDetails);
    }
}
