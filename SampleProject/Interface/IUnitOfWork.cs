using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleProject.Interface
{
    public interface IUnitOfWork
    {
        IEmployeeRepository employeeRepository { get; }
        void Save();
        void Dispose();
    }
}
