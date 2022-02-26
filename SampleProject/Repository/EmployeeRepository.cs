using SampleProject.Data;
using SampleProject.Data.Models;
using SampleProject.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleProject.Repository
{
    public class EmployeeRepository : Repository<EmployeeDetails>, IEmployeeRepository
    {
        private readonly ApplicationDbContext _applicationDb;
        public EmployeeRepository(ApplicationDbContext applicationDb) : base(applicationDb)
        {
            _applicationDb = applicationDb;
        }
        public List<EmployeeDetails> GetEmployeeDtails()
        {
            var result = _applicationDb.EmployeeDetails.ToList();
            return result;
        }
        public void Update(EmployeeDetails employeeDetails)
        {
            var objFromDb = _applicationDb.EmployeeDetails.FirstOrDefault(u => u.EmpId == employeeDetails.EmpId);
            if (objFromDb != null)
            {
                objFromDb.Email = employeeDetails.Email;
                objFromDb.Name = employeeDetails.Name;
                objFromDb.MobileNumber = employeeDetails.MobileNumber;
                _applicationDb.Update(objFromDb);
                _applicationDb.SaveChanges();
            }
        }
        public EmployeeDetails CreateEmplyoee(EmployeeDetails employeeDetails)
        {
            _applicationDb.Add(employeeDetails);
            _applicationDb.SaveChanges();
            return employeeDetails;
        }
        public EmployeeDetails GetEmployeeDetailsById(int id)
        {
          return _applicationDb.EmployeeDetails.FirstOrDefault(a=>a.EmpId==id);
        }
        public void DeleteEmployee(int id)
        {
            var deleteReocrd = _applicationDb.EmployeeDetails.FirstOrDefault(x => x.EmpId == id);
            if (deleteReocrd!=null)
            {
                _applicationDb.Remove(deleteReocrd);
                _applicationDb.SaveChanges();
            }
        }

    }
}
