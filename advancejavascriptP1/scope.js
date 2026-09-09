 //global scope
let x=10;
function display(){
    console.log(x);
}
display();


//function scope
function s(){
    let x=10;
    console.log(x);
}
s();



// block scope
if (true) {
    let x=10;
    let y=20;

    console.log(x);
    console.log(y);
}
//hosting 

console.log(name);
var name="vidhan";
//TDR start
// The period between entering the scope and declaring a variable is called temporal dead zone (TDZ).  
//  The variable is in a "dead" state and cannot be accessed until it has been declared. 
// This is a behavior of let and const declarations in JavaScript, which are hoisted to the top of their block scope but are not initialized until their definition is evaluated.
//TDR end
 //CLOSER
//clouser occur inner function remember the variable of outer function even the outer variable finished.

function outer(){
    let counter = 0;


    function inner(){
        counter++;
        console.log(counter);
    }

    return inner;

    
}

const increment = outer();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();