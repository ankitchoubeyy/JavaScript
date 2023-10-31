const userLoggedIn = true;
const debitCard = false;

if (userLoggedIn && debitCard) {
    console.log("Allow to Buy");
}
else console.log("Not allow");


/*
-------- Falsy values ---------------
false,-0,0, BigInt 0n, "", null, undefine, NaN


---------Truthy Values -------------------
"0", 'false', " ", [], function(){}

---->> Null Coalescing Operator (??) : null undefined

--->> Ternary Operator
condition ? true : false
*/

let val = 10;
val = 55 ?? 25; // first value will be assign or replace by first value 
console.log(val); // updated value will be value = 55

// Ternary Operator

val < 20 ? console.log("greater than 20"): console.log("Less than 20");

