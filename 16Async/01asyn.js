console.log("One");
console.log("Two");
console.log("Three");

// In above three lines program runs synchronusly, means each line executed in line by line manner.

setTimeout(() => {
    console.log("Hello Everyone");
}, 4000); // It takes four second to execute

console.log("Four");
console.log("Five");

// Note: Line 11 and 12 will also executed after line 3 and setTimeout() function works parallel due to async.