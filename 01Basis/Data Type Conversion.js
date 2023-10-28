// Data Type Conversion


// String --->> Number

let score = "34";
console.log(typeof(score)); // String

let myNumScore = Number(score); // String will be converted in Number
console.log(typeof(myNumScore));

let floor = "43a";
console.log(typeof(floor)); // String

let myNumFloor = Number(floor) // 
console.log(typeof(floor)); // It will still show number.
console.log(myNumFloor); // it will show NaN(Not a Number)


/*
    String -->> Number

    "33" -->> 33
    "33a" -->> NaN (Not a Number)
    true -->> 1
    false -->> 0
*/

// Number -->> Boolean 

let isLoggedIn = 1;
console.log(typeof(isLoggedIn)) // Data Type-->> number
console.log(Boolean(isLoggedIn)) // successfully converted to boolean using Boolean()

// String -->> Boolean 
let myStatus = '';
let yourStatus = 'Diamond';

console.log(Boolean(myStatus)); // -->> false : becuse myStatus does not have values
console.log(Boolean(yourStatus)); // -->> true : becuse yourStatus have values

/* 
    String -->> Boolean

    '' -->> false
    'abc' -->> true

    Number -->> Boolean 
    1 -->> true
    0 -->> false
*/
