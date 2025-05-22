/*
Step 4

Now that the teacher has all the information they need,
they want to be able to message the student with the results.
Complete the studentMsg function with totalScores and studentScore for parameters.
The function should return a string representing a message to the student.
If the student passed the course, the string should follow this format:

Example Code
Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.

If the student failed the course, the string should follow this format:
Example Code
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.

Replace average-goes-here with the average of the total scores. Replace grade-goes-here with the student's grade.

Tips
    Use the getAverage function to get the class average.
    Use the getGrade function to get the student's grade.
    Use string concatenation (+) to build the message.
    Be careful with the punctuation and spaces in the message.
*/

/**
 * @param {number[]} scores
 * @return {number}
 */
function getAverage(scores) {
  const len = scores.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += scores[i];
  }
  return sum / len;
}

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
  * @param {number[]} totalScores
  * @param {number} studentScore
  * @return {string}
  */
function studentMsg(totalScores, studentScore) {
  const grade = getGrade(studentScore);
  const average = getAverage(totalScores);
  const hasPassed = grade !== "F";
  return `Class average: ${average}. Your grade: ${grade}. You ${hasPassed ? "passed" : "failed"} the course.`;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
