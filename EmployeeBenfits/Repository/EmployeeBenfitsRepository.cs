using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeBenfits.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace EmployeeBenfits.Repository
{
    public class EmployeeBenfitsRepository: IEmployeeBenfitsRepository
    {
        private readonly EmployeeBenfitsDBContext _context;

        private readonly ILogger<EmployeeBenfitsRepository> _logger;

        public EmployeeBenfitsRepository(EmployeeBenfitsDBContext context, ILogger<EmployeeBenfitsRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<Employee> AddEmployee(Employee employee)
        {
            if (_context != null)
            {
                try
                {
                    var obj = await _context.AddAsync(employee);
                    await _context.SaveChangesAsync();
                    return obj.Entity;
                }
                catch (Exception e) {
                    _logger.LogError("Error Adding Employee Into DB {0}", e.Message);
                }
            }
            return null;
        }

        public async Task<IEnumerable<Employee>> GetEmployees()
        {
            if (_context != null)
            {
                try
                {
                    IEnumerable<Employee> employee = await _context.Employee.ToListAsync();
                    return employee;
                }
                catch (Exception e)
                {
                    _logger.LogError("Error Getting Employees From DB {0}", e.Message);
                }
            }
            return null;
        }

        public async Task<Employee> GetEmployeeById(int employeeId) {
            if (_context != null)
            {
                try
                {
                    Employee employee = await _context.Employee.FindAsync(employeeId);
                    return employee;
                }
                catch (Exception e)
                {
                    _logger.LogError("Error Getting Employee from DB with ID {0} {1}", e.Message, employeeId);
                }
            }
            return null;
        }
    }
}
