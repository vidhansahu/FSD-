// setTimeout
console.log("start");
setTimeout(() => {
    console.log("execute now");
}, 5000);
console.log("stop");

//setInterval
let count=1;
let timer=setInterval(()=> {
    console.log(count);
    count++;
    if(count==6){
        clearInterval(timer);
    }   
},5000);