
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

Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.

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

console.log("2"===2); //false


//Stack and Heap
let youtubeName = "Ajay Wankhade";
console.log(youtubeName);

let anotherName = youtubeName;

console.log(anotherName);
anotherName = "nacho";
console.log(anotherName);


let userOne ={
    email : "user@mail.com",
    upi : "user@apl"
}

console.log(userOne);

let userTwo = userOne;
userTwo.email= "ajay@mail.com"

console.log(userTwo);
console.log(userOne);








