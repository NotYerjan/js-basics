function calculateAverageAge(persons) {
  const ageSum = persons.reduce((a, b) => {
    if (typeof a == "object") {
      return a.age + b.age;
    } else if (typeof a == "number") {
      return a + b.age;
    }
  });
  const average = Math.round(ageSum / persons.length);
  return average;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);
