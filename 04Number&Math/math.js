// Maths in Js
console.log(Math.PI); // 3.141592653589793
console.log(Math.PI.toFixed(2)); // 3.14 due to number.toFixed()

// round(), ceil(), floor()
const myNum = 5.7;
console.log(Math.ceil(myNum)); // 6
console.log(Math.floor(myNum)); // 5
console.log(Math.round(myNum)); // automatically round to 5

// max() and min()
console.log(Math.max(2, 34, 21, 34, 16)); //34 is max value
console.log(Math.min(2, 34, 21, 34, 16)); //2 is min value

// Math.round()

let randomNumber = Math.random(); // Note : values always lies between 0 to 1
console.log(randomNumber);

let luckyDraw = Math.random()*20;
console.log(luckyDraw.toFixed(0));

let min = 20;
let max = 30;
//Formula to get Desire Random Numbers
const myDesiredRangeNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(myDesiredRangeNumber); 
