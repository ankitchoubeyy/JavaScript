/* 
------------------- JavaScript Maps --------------------

The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

*/

let myNums = [12, 34, 5, 6, 78];

// let newNums = myNums.map(((num) => num));
// console.log(newNums);

// ----------- Chaining Concept ---------------

// Multiple map() and filter() method can be apply for chaining.

let newNums = myNums
  .map((num) => num * 5)
  .map((num) => num + 5)
  .filter((num) => num >= 50);

console.log(newNums); // [ 65, 175, 395 ]