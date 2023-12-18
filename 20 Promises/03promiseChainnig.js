// Promise chainning
function myAsyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("Success");
    }, 3000);
  });
}

function myAsyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("Success");
    }, 3000);
  });
}
// fetching promises
// console.log("Fetching data1");
// myAsyncFunction1().then((rse) => {
//   console.log("Fetching data2");
//   myAsyncFunction2().then((res) => {});
// });

// ------------ Actual method to call promises --------------
console.log("Fetching data1");
myAsyncFunction1()
  .then((res) => {
    console.log("Fetching data2");
    return myAsyncFunction2();
  })
  .then((res) => {
    console.log(res);
  });
