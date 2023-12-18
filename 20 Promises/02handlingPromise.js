/*
 using : .then() and .catch()

1. .then() only executes when our promise is full filled.
2. .catch() only executes when our promise is failed.

*/

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("Success");
    // reject("Failed")
  });
};

let promise = getPromise();
//.then()
promise.then((res)=>{
    console.log("Promise fullfilled", res);
})

// .catch()
promise.catch(()=>{
    console.log("Promise failed");
})

/*

Note: Inside the .catch((err)=>{}) and .then((res)=>{}) res,and err are 2 by default parameters passed in both function

*/
