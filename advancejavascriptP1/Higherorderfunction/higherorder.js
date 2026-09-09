function calculate(a,b,operation) {
    return operation(a,b);
}
function add(x,y) {
    return x+y;

}
function multiply(x,y) {
    return x*y;
}
console.log (calculate(1,2,add)); 
console.log (calculate(1,2,multiply)); 
//.map
let numbers = [1,2,3,4,5];
let square = numbers.map(function(number){
    return number*number;
});
console.log(square);
//using arrow function
 let arr = [1,2,3,4,5];

// for(let i =0 ; i < arr.length; i++){
  //   let sq= arr[i] * arr[i];
   //  console.log(sq);
 //}


//let square = arr.map(function(num){
  //  return num*num;
//})
//console.log(square);


//let square1 = arr.map((num) => num * num);
//console.log(square1);
 
 // .Filter
let evenNumbers = number.filter(function(number)
{
    return number % 2 === 0;
});

console.log(evenNumbers);

// Reduce 
let numbers =  [10,20,30,40,50]
let total = numbers.reduce((sum,numbers)=>
{
    return sum+numbers;
},0);
console.log(total);
//max number 
let max = numers.reduce((max, current) => {
    return current > max ? current : max;
}, numers[0]);

console.log(max);
//find
let student =[
{id:1,name:"vidhan",marks:30}
{id:2,name:"sachin",marks:40},
];
let student = student.find(s=>s.id===2);
console.log(student);