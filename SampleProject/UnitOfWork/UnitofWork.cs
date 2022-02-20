using SampleProject.Data;
using SampleProject.Interface;
using SampleProject.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleProject.UnitOfWork
{
    public class UnitofWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _dbContext;
        public UnitofWork(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
            employeeRepository = new EmployeeRepository(_dbContext);
        }
        public IEmployeeRepository employeeRepository
        {
            get; private set;
        }
        public void Save()
        {
            _dbContext.SaveChanges();
        }
        public void Dispose()
        {
            _dbContext.Dispose();
        }
    }
}
