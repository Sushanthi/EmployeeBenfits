using System;
namespace EmployeeBenfits.Models
{
    public class BenfitCosts
    {
        public string TotalPay { get; set; }
        public string BenfitsCosts { get; set; }
        public string NetPay { get; set; }
        public string GrossPay { get; set; }
        public int DependentsCount { get; set; }
    }
}
