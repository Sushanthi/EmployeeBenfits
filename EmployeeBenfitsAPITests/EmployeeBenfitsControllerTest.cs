using System;
using Xunit;
using Moq;
using EmployeeBenfits.Controllers;
using EmployeeBenfits.Models;
using EmployeeBenfits.Services;
using EmployeeBenfits.Repository;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeBenfitsAPITests
{
    public class EmployeeBenfitsControllerTest
    {
        private Mock<IEmployeeBenfitsRepository> _mockRepository = new Mock<IEmployeeBenfitsRepository>();
        private Mock<IEmployeeBenfitsService> _mockService = new Mock<IEmployeeBenfitsService>();
        private Mock<ILogger<EmployeeBenfitsController>> _mocklogger = new Mock<ILogger<EmployeeBenfitsController>>();
        private List<Employee> employeeList = new List<Employee>();
        private Employee emp = new Employee
        {
            EmployeeId = 1088,
            FirstName = "John",
            LastName = "Smith",
            Dob = "02-01-1990",
            PhoneNumber = "222-222-2222",
            Addressline = "Allen Pk Way",
            City = "Austin",
            Country = "Texas",
            Province = "USA",
            Zipcode = "77584",
            DependentsCount = 2
        };
        private Employee duplicateEmp = new Employee
        {
            EmployeeId = 1451, 
            FirstName = "John",
            LastName = "Smith",
            Dob = "02-01-1990",
            PhoneNumber = "222-222-2222",
            Addressline = "Allen Pk Way",
            City = "Austin",
            Country = "Texas",
            Province = "USA",
            Zipcode = "77584",
            DependentsCount = 2
        };
        private  void  SetupMocks()
        {
            employeeList.Add(new Employee {
                EmployeeId = 1456, FirstName = "Will", LastName = "Smith", Dob = "02-03-1989", PhoneNumber = "222-222-1223", Addressline = "Bob Pkway", City = "Austin", Province = "Texas",
                Country = "USA",
                Zipcode = "77584",
                DependentsCount = 0
            });
            employeeList.Add(new Employee
            {
                EmployeeId = 1458,
                FirstName = "John",
                LastName = "Smith",
                Dob = "02-01-1990",
                PhoneNumber = "222-222-2222",
                Addressline = "Allen Pk Way",
                City = "Austin",
                Country = "Texas",
                Province = "USA",
                Zipcode = "77584",
                DependentsCount = 2
            });
            _mockRepository.Setup(it => it.AddEmployee(It.IsAny<Employee>())).ReturnsAsync(emp);

            _mockRepository.Setup(it => it.GetEmployeeById(It.IsAny<int>())).ReturnsAsync(new Employee {
                EmployeeId = 1451,
                FirstName = "Tara",
                LastName = "Williams",
                Dob = "12-12-1987",
                PhoneNumber = "222-222-26712",
                Addressline = "Williams Pk Way",
                City = "Austin",
                Country = "Texas",
                Province = "USA",
                Zipcode = "77584",
                DependentsCount = 1
            });

            _mockRepository.Setup(it => it.GetEmployeeById(1088)).ReturnsAsync((Employee)null);

            _mockRepository.Setup(it => it.GetEmployees()).ReturnsAsync(employeeList);

            _mockService.Setup(it => it.GetCalculatedBenfits(It.IsAny<int>())).ReturnsAsync(new BenfitCosts
            {
                NetPay = "$1942.38",
                GrossPay = "$2000",
                BenfitsCosts = "$57.69",
                DependentsCount = 2,
                TotalPay = "$52000"
            });

            _mockService.Setup(it => it.GetCalculatedBenfits(0)).ReturnsAsync((BenfitCosts)null);
        }

        

        [Fact]
        public async void GetEmployees_WhenCalled_ReturnsEmployeeCollection()
        {
            //Arrange
            SetupMocks();
            EmployeeBenfitsController employeeBenfitsController = new EmployeeBenfitsController(_mocklogger.Object, _mockRepository.Object, _mockService.Object);

            //Act
            IActionResult actionResult = await employeeBenfitsController.GetEmployees();
            var okResult = actionResult as OkObjectResult;
            IEnumerable<Employee> employees = okResult.Value as IEnumerable<Employee>;

            //Assert
            Assert.True(okResult.Value != null);
            Assert.Equal(2, employees.Count());

        }

        [Fact]
        public async void PostEmployee_WhenCalled_ReturnsSuccessStatusCode()
        {
            SetupMocks();
            EmployeeBenfitsController employeeBenfitsController = new EmployeeBenfitsController(_mocklogger.Object, _mockRepository.Object, _mockService.Object);
            IActionResult actionResult = await employeeBenfitsController.PostEmployee(emp);
            var okResult = actionResult as StatusCodeResult;
            Assert.Equal(200, okResult.StatusCode);
        }

        [Fact]
        public async void PostEmployee_WhenCalled_ReturnsDuplicateRecordStatusCode()
        {
            SetupMocks();
            EmployeeBenfitsController employeeBenfitsController = new EmployeeBenfitsController(_mocklogger.Object, _mockRepository.Object, _mockService.Object);
            IActionResult actionResult = await employeeBenfitsController.PostEmployee(duplicateEmp);
            var okResult = actionResult as ObjectResult;
            Assert.Equal(406, okResult.StatusCode);
        }

        [Fact]
        public async void GetCalculatedBenfits_WhenCalled_ReturnsBenfits()
        {
            SetupMocks();
            EmployeeBenfitsController employeeBenfitsController = new EmployeeBenfitsController(_mocklogger.Object, _mockRepository.Object, _mockService.Object);
            IActionResult actionResult = await employeeBenfitsController.GetCalculateBenfitsCost(1458);
            var okResult = actionResult as OkObjectResult;
            BenfitCosts benfitCosts = okResult.Value as BenfitCosts;
            Assert.True(okResult != null);
            Assert.Equal("$1942.31", benfitCosts.NetPay);
            Assert.Equal("$2000", benfitCosts.GrossPay);
            Assert.Equal("$57.69", benfitCosts.BenfitsCosts);
            Assert.Equal("$52000", benfitCosts.TotalPay);
            Assert.Equal(2, benfitCosts.DependentsCount);
        }

        [Fact]
        public async void GetCalculatedBenfits_WithouEmpId_ReturnsNullBenfits()
        {
            SetupMocks();
            EmployeeBenfitsController employeeBenfitsController = new EmployeeBenfitsController(_mocklogger.Object, _mockRepository.Object, _mockService.Object);
            IActionResult actionResult = await employeeBenfitsController.GetCalculateBenfitsCost(0);
            var okResult = actionResult as StatusCodeResult;
            Assert.Equal(204, okResult.StatusCode);
        }
    }
}
