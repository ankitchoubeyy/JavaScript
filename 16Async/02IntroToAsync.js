function greeting() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Good Morning");
      resolve("Success");
    }, 3000);
  });
}

(async function myFun() {
  console.log("Printing greeting 1");
  await greeting();
  console.log("Printing greeting 2");
  await greeting();
  console.log("Printing greeting 3");
  await greeting();
  console.log("Printing greeting 4");
  await greeting();
})();

console.log("Hello, Everyone");