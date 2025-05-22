/*
Step 3

The teacher is really happy with the program you have created so far.
But now they want to have an easy way to check if a student has a passing grade.
A passing grade is anything that is not an "F".

Complete the function hasPassingGrade that takes a student score as a parameter.
Your function should return true if the student has a passing grade and false if they do not.

Tips
    Use the getGrade function to get the student's grade. Then check if the grade is passing or not.
*/

/**
  * @param {number} score
  * @return {string}
  */
function getGrade(score) {
  if (score <= 59) return "F";
  if (score <= 69) return "D";
  if (score <= 79) return "C";
  if (score <= 89) return "B";
  if (score <= 99) return "A";
  return "A++";
}

/**
  * @param {number} score
  * @return {boolean}
  */
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
