/*
Step 1
A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.
Complete the getAverage function which takes in an array of test scores and returns the average score.
The average is calculated by adding up all the scores and dividing by the total number of scores.
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

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
