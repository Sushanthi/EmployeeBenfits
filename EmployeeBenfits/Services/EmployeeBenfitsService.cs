using System;
using System.Linq;
using EmployeeBenfits.Models;
using Microsoft.EntityFrameworkCore;
using EmployeeBenfits.Constants;
using System.Threading.Tasks;
using EmployeeBenfits.Repository;
using Microsoft.Extensions.Logging;

namespace EmployeeBenfits.Services
{
    public class EmployeeBenfitsService : IEmployeeBenfitsService
    {
        private readonly IEmployeeBenfitsRepository _employeeBenfitsRepository;

        private readonly ILogger<EmployeeBenfitsService> _logger;

        private BenfitCosts benfitCosts = new BenfitCosts();

        public EmployeeBenfitsService(IEmployeeBenfitsRepository employeeBenfitsRepository, ILogger<EmployeeBenfitsService> logger)
        {
            _employeeBenfitsRepository = employeeBenfitsRepository;
            _logger = logger;
        }

        public async Task<BenfitCosts> GetCalculatedBenfits(int employeeId)
        {
            try {
                double result = 0;
                double totalBenfitCost, totalPayPerYear;
                Employee employee = await _employeeBenfitsRepository.GetEmployeeById(employeeId);
                int dependentCount = employee.DependentsCount;
                totalBenfitCost = double.Parse(Constants.PayAndBenfitDetails.employeeBenfitCost.Replace("$", string.Empty))
                        + (dependentCount * double.Parse(Constants.PayAndBenfitDetails.dependentBenfitCost.Replace("$", string.Empty)));
                if (employee.FirstName.ToString().ToLower().StartsWith("a"))
                {
                    totalBenfitCost = totalBenfitCost - 0.1 * totalBenfitCost;
                }
                totalPayPerYear = double.Parse(Constants.PayAndBenfitDetails.payPerPayCheck.Replace("$", string.Empty)) * Constants.PayAndBenfitDetails.noOfPayChecksPerYear;
                result = Math.Round((totalPayPerYear - totalBenfitCost) / Constants.PayAndBenfitDetails.noOfPayChecksPerYear, 2);
                benfitCosts.BenfitsCosts = "$" + Math.Round(totalBenfitCost / Constants.PayAndBenfitDetails.noOfPayChecksPerYear, 2);
                benfitCosts.NetPay = "$" + result.ToString();
                benfitCosts.GrossPay = Constants.PayAndBenfitDetails.payPerPayCheck;
                benfitCosts.DependentsCount = dependentCount;
                benfitCosts.TotalPay = "$" + totalPayPerYear.ToString();
                return benfitCosts;
            }
            catch (Exception e)
            {
                Console.WriteLine("Error calculating benfit costs {0}", e.Message);
            }
            return null;
        }
    }
}
