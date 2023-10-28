let myDate = new Date();
console.log(myDate.toLocaleDateString());
console.log(myDate.getFullYear());
console.log(myDate.getDate());
console.log(myDate.getDay());

let myTimeStamp =  Date.now();
console.log(myTimeStamp);

myDate.toLocaleString('default', {
    weekday:"long"
})
