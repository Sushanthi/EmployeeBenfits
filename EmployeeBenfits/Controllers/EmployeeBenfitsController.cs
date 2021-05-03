using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using EmployeeBenfits.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using EmployeeBenfits.Models;
using EmployeeBenfits.Services;
using System.Net;
using Microsoft.AspNetCore.Http;

namespace EmployeeBenfits.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeBenfitsController : ControllerBase
    {

        private readonly ILogger<EmployeeBenfitsController> _logger;
        private readonly IEmployeeBenfitsRepository _repository;
        private readonly IEmployeeBenfitsService _service;

        public EmployeeBenfitsController(ILogger<EmployeeBenfitsController> logger, IEmployeeBenfitsRepository repository, IEmployeeBenfitsService service)
        {
            _logger = logger;
            _repository = repository;
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            try
            {
                return Ok(await _repository.GetEmployees());
            }
            catch (Exception e) {
                _logger.LogError("Error occured {0}", e.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
        }

        [HttpGet("{employeeId}")]
        public async Task<IActionResult> GetCalculateBenfitsCost(int employeeId) {
            try
            {
                BenfitCosts benfitCosts = await _service.GetCalculatedBenfits(employeeId);
                if (benfitCosts != null)
                {
                    return Ok(benfitCosts);
                }
                return StatusCode(StatusCodes.Status204NoContent);
            }
            catch (Exception e) {
                _logger.LogError("Error occured {0}", e.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
        }

        [HttpPost]
        public async Task<IActionResult> PostEmployee([FromBody] Employee employee) {
            try
            {
                Employee e = await _repository.GetEmployeeById(employee.EmployeeId);
                if (e != null)
                {
                    return StatusCode(StatusCodes.Status406NotAcceptable);
                }
                else {
                    var employeePostId = _repository.AddEmployee(employee);
                    return StatusCode(StatusCodes.Status200OK);
                }
            }
            catch (Exception e) {
                _logger.LogError("Error occured {0}", e.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
