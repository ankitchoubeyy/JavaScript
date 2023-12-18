// Promise: It is used to overcome the problem of callback hells

// It is a JavaScript object that links producing code and consuming code.

let promise = new Promise((resolve, reject) => {
  console.log("Learing promise");
  resolve("Your order is delevered succesfully");
  // reject("Getting error"); // It will indicate error

  resolve(); // when successful
  reject(); // when error
});
