for (let index = 1; index < 11; index++) {
    const element = index;
    console.log(element);  
}

// Conditional Statements in a loop

for (let i = 1; i < 11; i++) {
    const element = i;
    if(i==3) console.log("3 Is best number");
    console.log(element); 
}

/* 
-->> Break : Break statement will break the flow and move out from the loop 

-->> Continue : It will only skip that targeted value and loop will remain continue.

*/

// Break
for (let j = 0; j < 15; j++) {
    const element = j;
    if(j==10) break;
    console.log(element);  
}

//Continue
for (let k = 0; k < 15; k++) {
    const element = k;
    if(k==10) continue;
    console.log(element);  
}


