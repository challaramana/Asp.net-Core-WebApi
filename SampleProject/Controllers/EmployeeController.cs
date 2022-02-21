using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SampleProject.Data.Models;
using SampleProject.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }
        /// <summary>
        /// Create/add new employee
        /// </summary>
        /// <param name="employeeDetails"></param>
        /// <returns></returns>
        [HttpPost("CreateEmplyoee")]
        public IActionResult CreateEmplyoee(EmployeeDetails employeeDetails)
        {
            _employeeRepository.CreateEmplyoee(employeeDetails);
            return Ok();
        }
        /// <summary>
        /// Get All employee details
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetEmployeeDetiails")]
        public IActionResult GetEmployeeDetiails()
        {
            var data = _employeeRepository.GetEmployeeDtails();
            return Ok(data);
        }
        /// <summary>
        /// Get employee details by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("GetEmployeeDetailsById/{id?}")]
        public IActionResult GetEmployeeDetailsById(int id)
        {
            var employeeByid = _employeeRepository.GetEmployeeDetailsById(id);
            return Ok(employeeByid);
        }
        /// <summary>
        /// Delete employeeRecord
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("DeleteEmployee/{id?}")]
        public IActionResult DeleteEmployee(int id)
        {
            _employeeRepository.DeleteEmployee(id);
            return Ok();

        }
        /// <summary>
        /// UpdateEmployee details
        /// </summary>
        /// <param name="employeeDetails"></param>
        /// <returns></returns>
        [HttpPut("UpdateEmployee")]
        public IActionResult UpdateEmployee(EmployeeDetails employeeDetails)
        {
            _employeeRepository.Update(employeeDetails);
            return Ok();
        }

    }
}
