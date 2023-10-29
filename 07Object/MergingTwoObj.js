// ----------- Merging two or more objects ---------------

let person = {
  name: "Om",
  age: 13,
};

let job = {
  role: "student",
  standard: "5th",
};

let myobj1 = {
  name: "Satyam",
  age: 10,
};

// let anotherObj = {myobj, myobj1} // It will not merge two object

//
/*
-----Merging------- 
Two method of merging

1.Use a spread operator ( ...)
2.Use the Object.assign() method
*/

// 1. using Spread Operator
let person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  ssn: "123-456-2356",
};

let job1 = {
  jobTitle: "JavaScript Developer",
  country: "USA",
};

let bioData = {
  ...person1,
  ...job1,
};
console.log(bioData);

// 2.Object.assign(target, source1, source2)
let anotherObj = Object.assign(person, job);
console.log(anotherObj);


