//objects can be declared in 2 ways

//Object.create

// Object Literals
const mySym = Symbol("key1");

const JsUser = {
    name:"Ajay",
    "full name":"Ajay wankhde",
    [mySym]:"myKey1",
    age : 20,
    location : "Nagpur",
    email: "ajay@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["monday","saturday"]
}

//accessing object values in 2 ways
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); //we cant access using . 
console.log(JsUser[mySym]); 

//change values
JsUser.email = "ajay@reddit.com";

// Object.freeze(JsUser);
JsUser.email= "ajaw3kdfl"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Good Morning");
    
}
JsUser.greetingTwo = function(){
    console.log(`Good Morning, ${this.name}`);
    
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




