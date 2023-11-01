/* 
---------------------- Filter() ---------------------------

----->> It also takes callback function() like forEach loop.

1.The filter() method creates a new array filled with elements that pass a test provided by a function.

2.The filter() method does not execute the function for empty elements.

3.The filter() method does not change the original array.
*/

let words = ["spray", "elite", "exuberant", "destruction", "present"];

let newWords = words.filter((wrd) => wrd.length > 7);

console.log(newWords);

// Example-2
let persons = [
  { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
  { firstName: "Jay", lastName: "Ram", age: 60, eyeColor: "red" },
  { firstName: "Rohan", lastName: "Sharma", age: 45, eyeColor: "blue" },
  { firstName: "Vishal", lastName: "Choubey", age: 18, eyeColor: "black" },
  { firstName: "Mohan", lastName: "Doe", age: 23, eyeColor: "blue" },
  { firstName: "Ankit", lastName: "Choubey", age: 21, eyeColor: "blue" },
];

persons = persons.filter((person) => person.age > 30 && person.eyeColor === "blue");
console.log(persons);
