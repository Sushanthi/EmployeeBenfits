using System;
using System.Collections.Generic;

namespace EmployeeBenfits.Models
{
    public partial class Employee
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Dob { get; set; }
        public string PhoneNumber { get; set; }
        public string Addressline { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string Country { get; set; }
        public string Zipcode { get; set; }
        public int DependentsCount { get; set; }
    }
}