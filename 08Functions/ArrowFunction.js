// ---------- Syntax of Arrow Function -----------

let arrowFunction = () => {
  console.log(`This is an arrow function`);
};

arrowFunction();

const singleLineFunction = (num1, num2) => num1 + num2;
// while using  a single line function no need use curly breaces for function defination.
console.log(singleLineFunction(23, 43));

// ------------- IIFE --------------
// IIFE -->> Immediately Invoked function expresssion

// 1.Unamed IIFE
(() => {
  console.log(`Unnamed IFFE function`);
})();

// 2.Named IFFE
(
  function iffeFunction() {
    console.log(`This is named IFFE function expresssion`);
  }
)();

// IIFEs prevent pollution of the global JS scope.
