using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission04.Models;
// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission04.Controllers
{
    public class BlahController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalculator (GradeCalculator model)
        {
            if (ModelState.IsValid)
            {
                return GradeCalculator();
            }
            else
            {
                return View(model);
            }
        }
    }
}

