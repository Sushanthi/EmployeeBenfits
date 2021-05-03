using System;
using System.Threading.Tasks;
using EmployeeBenfits.Models;

namespace EmployeeBenfits.Services
{
    public interface IEmployeeBenfitsService
    {
        public Task<BenfitCosts> GetCalculatedBenfits(int employeeId);
    }
}
