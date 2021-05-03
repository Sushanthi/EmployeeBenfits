using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using EmployeeBenfits.Models;

namespace EmployeeBenfits.Repository
{
    public interface IEmployeeBenfitsRepository
    {
        Task<IEnumerable<Employee>> GetEmployees();

        Task<Employee> AddEmployee(Employee employee);

        Task<Employee> GetEmployeeById(int employeeId);
    }
}
