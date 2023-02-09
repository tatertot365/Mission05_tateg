// Grade calculator function
$('#btn-submit').click(function () {

    // values are grabbed and parsed from the grade calculator form
    let assignments = parseInt($('#assignments').val())
    let group_projects = parseInt($('#groupproject').val())
    let quizzes = parseInt($('#quizzes').val())
    let midterm = parseInt($('#midterm').val())
    let final = parseInt($('#final').val())
    let intex = parseInt($('#intex').val())

    // The total grade is calculated and rounded
    let total_grade = (assignments * 0.5) + (group_projects * 0.1) + (quizzes * 0.1) + (midterm * 0.1) + (final * 0.1) + (intex * 0.1)
    total_grade = total_grade.toFixed(2)


    // Here the letter grade is calculated based on total grade 
    let letterGrade = 'Z'

    if (total_grade >= 94) {
        letterGrade = 'A'
    }
    else if (total_grade >= 90) {
        letterGrade = 'A-'
    }
    else if (total_grade >= 87) {
        letterGrade = 'B+'
    }
    else if (total_grade >= 84) {
        letterGrade = 'B'
    }
    else if (total_grade >= 80) {
        letterGrade = 'B-'
    }
    else if (total_grade >= 77) {
        letterGrade = 'C+'
    }
    else if (total_grade >= 74) {
        letterGrade = 'C'
    }
    else if (total_grade >= 70) {
        letterGrade = 'C-'
    }
    else if (total_grade >= 67) {
        letterGrade = 'D+'
    }
    else if (total_grade >= 64) {
        letterGrade = 'D'
    }
    else if (total_grade >= 60) {
        letterGrade = 'D-'
    }
    else {
        letterGrade = 'E'
    }

     // $("#Final_Grade").html('Percent Grade: ' + total_grade + "<br>Letter Grade: " + letterGrade)
    // This is the alert that outputs the total grade and the letter grade for the student

    alert('Percent Grade: ' + total_grade + "\nLetter Grade: " + letterGrade)
})