// myFunction(); // ReferenceError: Cannot access 'myFunction' before initialization
// --------- Function as a Expression -----------
const myFunction = function () {
  console.log(`Hello Bharat`);
};

myFunction(); //Function will be executed here 

// ------------- Normal Function -----------
normalFunction(); //No reference error will be prodeuc, we can call it even before the initailization.
function normalFunction (){
    console.log(`Normal Function`);
}
normalFunction();
