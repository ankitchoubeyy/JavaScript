// Data Types --> 1. Primitve DT and 2. Derived DT

// 1. Primitive Data Type 

let name = "Ankit"; // String

let age = 21; // Number --> 2 to Power 53 (range) / Big int -->> for more numbers

let isStudent = true; // Boolean -->> true/false

let number = null // Null is usually intensnly defined data types

let state;  // Undefine

// 2. Referenced/Derived Data Types ---> Objects,Arrays,function,literals

let bioData = { 
    myName : "Ankit",
    myAge : 21,
    myMaritalStatus : false
} // Object Data Types

console.log(bioData.myMaritalStatus);

// To know the data type use typeOf() operator/function

console.log(typeof(bioData)); // object
console.log(typeof(null)); // Note : null is data type but itself it is a Object.
