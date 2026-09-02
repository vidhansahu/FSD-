// callback function
function display (result){
    console.log(result); 
}
function cal(a,b,callback){
    callback(a+b);
}
cal (10,20,display);
 