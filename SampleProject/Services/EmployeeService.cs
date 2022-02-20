using Microsoft.Extensions.Logging;
using SampleProject.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleProject.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<EmployeeService> _logger;
        public EmployeeService(IUnitOfWork unitOfWork, ILogger<EmployeeService> logger)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
        }
    }
}
