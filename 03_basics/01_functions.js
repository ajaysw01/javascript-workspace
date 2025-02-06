
//declaration
function sayMyName(){
    console.log("My name is ajay");   
}

//invocation
// sayMyName()

// function addTwoNums(num1, num2 ){//params
//     console.log(num1 + num2);
// }

//Arguments, params, return

function addTwoNums(num1, num2 ){//params
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNums(1,2) // arguments

// console.log(result);


function loginUserMsg(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return        
    }
    return `${username} just logged in !`
}

// console.log(loginUserMsg("ajay"));

// console.log(loginUserMsg());

// What if we dont how many params will come we use
//...rest operator
function calculateCartPrice(val1, val2,...nums){
    return [val1, val2, nums]
}

console.log(calculateCartPrice(200,234,400,600,211));

// funciton with object
const user = {
    name : "ajay",
    age : 25
}

function handleObjet(anyobject) {
    console.log(`user name is ${anyobject.name} and age is ${anyobject.age}`);
}

// handleObjet(user)
handleObjet({
    name : "ajay",
    age : 25
})


//functions with array
const myNewArray = [200,400,12,123]

function handleArray(anyarr){
    return anyarr[1]
}

console.log(handleArray(myNewArray));
