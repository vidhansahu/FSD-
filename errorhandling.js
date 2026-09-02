//custom error
function checkAge(age){
    if(age<18){
        throw new Error("Not");
    }
    console.log("Yes");
}

try{
    checkAge(15);
}catch(error){
    console.log(error.message);
}