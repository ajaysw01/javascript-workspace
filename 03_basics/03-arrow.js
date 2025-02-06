const user = {
    name : "ajay",
    price : 99,

    welcomeMsg : function(){
        console.log(`${this.name}, welcome`);   
        console.log(this);
        
    }
}

// user.welcomeMsg()
// user.name = "sam"
// user.welcomeMsg()

console.log(this); // {} , if in browser --> window

function m1(){
    // console.log(this); // Object global properties    
    let username = "ajya"
    console.log(this.username); //undefined
}
// m1()


//arrow functions 

const chai = ()=> {
    console.log(this); //{}        
}

// chai()


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return 
// const addtwo = (num1, num2) => num1 + num2

const addtwo = (num1, num2) => (num1 + num2)

console.log(addtwo(2,3));

const myarr = [2,23,2,4,5]


// myarr.forEach(() => {})




