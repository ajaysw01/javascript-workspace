/*

Javascript is a dynamically typed language. 
Primitive DT : 
1. string
2. Number
3. Boolean
4. null
5. undefined
6. symbol
7. Bigint

Reference(Non Primitves) : 
1. Array
2. Object
3.Function

*/

const score = 100;
const scoreValue = 100.332;

const isLoggedIn = false;
const outsideTemp = null;
let userMail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id=== anotherId);

const bigNo = 2341325153134167786843241n;
console.log(bigNo);

//arrays

const heros = ["shaktiman","juniorg","karma"]

//objects

let myObj = {
    name:"ajay",
    age : 22
}


//function 
const myFunct = function(){
    console.log("hello world");
}

console.log(typeof myFunct);


/* 
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object




*/