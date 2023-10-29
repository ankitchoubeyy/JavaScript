// Array
const myArr = [12, 34, 5, 67, 87, 98];
console.log(myArr[2]); // Array elements can be accesed by using index value

// -------------- Array Methods ---------------

// 1.push() : It push the element to the array
myArr.push(34);
console.log(myArr);

// 2.pop() : It will remove the last element from the array
myArr.pop();
console.log(myArr);

//3.unshift() : It will add element at first index by shifting all other elemets from the array
myArr.unshift(21);
console.log(myArr);
// Note: using unshift() is can be very time consuming method

//3.shift() : It will delete element from first index from the array
myArr.shift();
console.log(myArr);

// 4.includes() : It will check that given number is present in an array or not
console.log(myArr.includes(34)); // true/false

// 5.indexOf(element) : It will check the index of given element in an array
console.log(myArr.indexOf(98));

// 6.splice(rangeInital, rangeFinal) : Due to this original array is get affected
const myArr1 = [1, 2, 3, 4, 5];
console.log(myArr1.splice(1, 3));
console.log(myArr1);

//  7.slice(rangeInital, rangeFinal) : original array is not get affected
console.log(myArr1.slice(1, 3));

//  -------------- Merging Two or more Array together ----------------

let marvelHeroes = ["Loki", "Iron Man", "Thor"];
let dcHeroes = ["Spider Man", "Batman", "Flash"];
let myHeroes = ["Shakitmaan", "Naagraj"];

// Note: Best way to merge two or more array is using spread operator [...arrayName]

let allHeroes = [...marvelHeroes, ...dcHeroes, ...myHeroes];
console.log(allHeroes);

// Note: By allHeroes.concat(arr1,arr2) method you can only merge two arrays at a time

//----------- Merging sub arrays of an array ------------------

let anotherArray = [12, 43, [34, 56, 89], [1, 4, 6, [4, 6, 77]]]; // contains multiple sub arrays
let newAnotherArray = anotherArray.flat(Infinity);
console.log(newAnotherArray);

//------------ Converting another data type into an array --------------

let myFirstName = "Ankit";
console.log(Array.from(myFirstName)); // [ 'A', 'n', 'k', 'i', 't' ]
let myDOB = { month: 7 };
console.log(Array.from(myDOB)); // []
