/*
------------- Reduce() method ---------------

-->> it can be used with array and objects

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


*/

let myArray = [1,2,3,4,5];

let newArray = myArray.reduce((acc,currVal) => acc+currVal,0);
console.log(newArray);