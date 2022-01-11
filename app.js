//console.log("hello world");
//output for var 3 3 3
// for(var i = 0; i < 3; i++){
//     setTimeout(function() {
//         console.log(i);
//     })
// }

// for(let i = 0; i < 3; i++){
//     setTimeout(function() {
//         console.log(i);
//     })
// }
// const fun = function(a,b){
//     return a + b;
// }
//let a = 5;
//console.log(a ** 2);
//console.log(fun(10,20));
//console.log(a(10,20)); error
//console.log(fun ** 2); NaN
// console.log("12" + 12, '"12" + 12');
// console.log("12" - 12);
// console.log("ab" - 12);
// console.log(+"12" + 12);
// console.log("12" + 12, '"12" + 12');
// console.log(`+"12" + 12 = ${+"12" + 12}`);



//homework 10 definition
//1. using only two letters "a", "s" print out word ananas case insensitive AnaNas.
//2. write function calculate that can perform any arithmetic 
//operation on two numbers(*,/,+,-).
//3. write any example for running the following expression fun(5)(10,3)

//1.
const fun = function(a,b){
    return a + b;
}
console.log("a" + fun**2 + "a" + "s");

//2.
const calc = function(a,b,action){
    let res=-1;
switch(action)
{
    case 1: res=a+b;
    break;
    case 2: res=a-b;
    break;
    case 3: res=a*b;
    break;
    case 4: 
    if(b!=0){
        res=a/b;
    }else console.log("cant division by zero");
    break;
    default: console.log("wrong action");
}
return res;
}
console.log(calc(2,3,1));





