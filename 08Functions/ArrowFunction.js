// ---------- Syntax of Arrow Function -----------

let arrowFunction = () => {
    console.log(`This is an arrow function`);
};

arrowFunction();

const singleLineFunction = (num1,num2) => (num1+num2);
// while using  a single line function no need use curly breaces for function defination.
console.log(singleLineFunction(23,43));

// ------------- Anonymous Function --------------

console.log(()=>{
    console.log(`anonymus Function`);
});
