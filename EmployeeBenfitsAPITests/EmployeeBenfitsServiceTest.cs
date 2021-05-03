using System;
using System.Collections.Generic;
using EmployeeBenfits.Models;
using EmployeeBenfits.Repository;
using EmployeeBenfits.Services;
using Moq;
using Xunit;
using EmployeeBenfits.Constants;
using Microsoft.Extensions.Logging;

namespace EmployeeBenfitsAPITests
{
    public class EmployeeBenfitsServiceTest
    {
        private Mock<IEmployeeBenfitsRepository> _mockRepository = new Mock<IEmployeeBenfitsRepository>();
        private Mock<ILogger<EmployeeBenfitsService>> _mocklogger = new Mock<ILogger<EmployeeBenfitsService>>();

        private void SetupMocks()
        {
            _mockRepository.Setup(it => it.GetEmployeeById(1451)).ReturnsAsync(new Employee
            {
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

            _mockRepository.Setup(it => it.GetEmployeeById(1209)).ReturnsAsync(new Employee
            {
                EmployeeId = 1209,
                FirstName = "Austin",
                LastName = "Brook",
                Dob = "12-01-1982",
                PhoneNumber = "222-222-2212",
                Addressline = "Williams Pk Way",
                City = "Dallas",
                Country = "Texas",
                Province = "USA",
                Zipcode = "77501",
                DependentsCount = 1
            });
        }

        [Fact]
        public async void GetCalculatedBenfits_WhenCalled_ReturnsBenfits()
        {
            SetupMocks();
            EmployeeBenfitsService employeeBenfitsService = new EmployeeBenfitsService(_mockRepository.Object, _mocklogger.Object);
            BenfitCosts benfitsCost =  await employeeBenfitsService.GetCalculatedBenfits(1451);
            Assert.Equal("$1942.31", benfitsCost.NetPay);
            Assert.Equal("$2000", benfitsCost.NetPay);
            Assert.Equal("$57.69", benfitsCost.BenfitsCosts);
            Assert.Equal("$52000", benfitsCost.TotalPay);
            Assert.Equal(1, benfitsCost.DependentsCount);
        }

        [Fact]
        public async void GetCalculatedBenfits_WhenCalledWithoutEmpId_ReturnsNullBenfits()
        {
            SetupMocks();
            EmployeeBenfitsService employeeBenfitsService = new EmployeeBenfitsService(_mockRepository.Object, _mocklogger.Object);
            BenfitCosts benfitsCost = await employeeBenfitsService.GetCalculatedBenfits(0);
            Assert.True(benfitsCost == null);
        }

        [Fact]
        public async void GetCalculatedBenfits_WhenCalled_EmployeeStartsWithA_ReturnsBenfits()
        {
            SetupMocks();
            EmployeeBenfitsService employeeBenfitsService = new EmployeeBenfitsService(_mockRepository.Object, _mocklogger.Object);
            BenfitCosts benfitsCost = await employeeBenfitsService.GetCalculatedBenfits(1451);
            Assert.Equal("$1948.08", benfitsCost.NetPay);
            Assert.Equal("$2000", benfitsCost.NetPay);
            Assert.Equal("$51.92", benfitsCost.BenfitsCosts);
            Assert.Equal("$52000", benfitsCost.TotalPay);
            Assert.Equal(1, benfitsCost.DependentsCount);
        }
    }
}
