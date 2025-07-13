//Part two:

//This is for const:
// const intern = "Chinaza"
// console.log(intern)

 //This is for let:
// let intern = "Ozor"
// console.log(intern)

//This is for var:
// var intern = "Judith"
// console.log(intern)

// //For total score:
//let scores = [10, 8, 6]
// calculate total score:
//  let total = 0;
//  for(let i = 0; i<scores.length; i++)
// {
//      total += scores[i];
//  }
//  console.log("total score:", total);

// For average score:
// let average = total / scores.length;
//  console.log("average score:", average);

// let scores = [10, 8, 6];
// let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;


// //No 3, To determine grade using if-else:
// let gradeA = "A";
// let gradeB = "B";
// let gradeC = "C";
// let gradeD = "D";
// let gradeE = "E";


// let grade;
// if (average >= 9){
//     grade = gradeA;
// }
// else if (average >= 8){
//     grade = gradeB;
// }
// else if (average >= 7){
//     grade = gradeC;
// }

// else if (average >= 6){
//     grade = gradeD;
// }
// else{
//     grade = gradeE;
// }

// console.log("average:", average.toFixed(2));
// console.log("Grade:", grade);

//No 4:
const studentName = "Mary";
const scores = {
Math: 9,
English: 8,
Science: 7
};

//Average:
const scoreValues = Object.values(scores);
const total = scoreValues.reduce((sum, val) => sum + val, 0);
const average = (total/ scoreValues.length).toFixed(2);

//Determine grade:
// let grade;
// let message;

// if(average >=9){
//     grade = "A";
//     message = "Excellent work!";
// }
// else if(average >= 8){
//     grade = "B";
//     message = "Great job!";
// }
//  else if (average >= 7) {
//   grade = "C";
//   message = "Good effort!";
// } else if (average >= 6) {
//   grade = "D";
//   message = "Needs improvement.";
// } else {
//   grade = "E";
//   message = "Try harder next time.";
// }

// console.log(`StudentName: ${studentName}`);
// console.log("Subject Scores:");
// for (const subject in scores) {
//   console.log(`- ${subject}: ${scores[subject]}`);
// }
// console.log(`average Score: ${average}`);
// console.log(`Final Grade: ${grade}`);
// console.log(`Message: ${message}`);

//No 5:
const grade = "A"; 
let message;

switch (grade) {
  case "A":
    message = "Excellent performance";
    break;
  case "B":
    message = "Great job! Keep aiming high";
    break;
  case "C":
    message = "Good effort. Try to improve.";
    break;
  case "D":
  case "E":
    message = "Don't give up. You can do better next time.";
    break;
  default:
    message = "Invalid grade";
}

console.log(`Grade: ${grade}`);
console.log(`Feedback: ${message}`);