const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

// name == lastname; // false
// age <= average; // true
// firstYearCompleted == lastname; // true
// yearsCompleted == firstYearCompleted; // true
// firstYearCompleted === yearsCompleted; //false
// examsCompleted < age; //false
// isGraduated > yearsCompleted; // undefined

console.log(
  name == lastname,
  age <= average,
  firstYearCompleted == lastname,
  yearsCompleted == firstYearCompleted,
  firstYearCompleted === yearsCompleted,
  examsCompleted < age,
  isGraduated > yearsCompleted
);
