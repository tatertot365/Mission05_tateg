using System;
using System.ComponentModel.DataAnnotations;

namespace Mission04.Models
{
	public class GradeCalculator
	{
        [Range(0, 100, ErrorMessage = "Assignments must be between 0 and 100")]
        public int Assignments { get; set; }

        [Range(0, 100, ErrorMessage = "Group Project must be between 0 and 100")]
        public int GroupProject { get; set; }

        [Range(0, 100, ErrorMessage = "Quizzes must be between 0 and 100")]
        public int Quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "Midterm must be between 0 and 100")]
        public int Midterm { get; set; }

        [Range(0, 100, ErrorMessage = "Final must be between 0 and 100")]
        public int Final { get; set; }

        [Range(0, 100, ErrorMessage = "Intex must be between 0 and 100")]
        public int Intex { get; set; }
    }
}

