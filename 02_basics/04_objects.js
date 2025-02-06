
// const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id ="123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@mail.com",
    // object in object - nested object
    fullname : {
        userFullNmae : {
            firstname : 'Ajay',
            lastname : 'Wankhade'
        }
    }
}

// console.log(regularUser.fullname.userFullNmae.firstname); 

// object merging
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"c", 6:"d"}

// const obj3 = {obj1, obj2} // not recom. { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


//other way 
// const obj3 = Object.assign({}, obj1, obj2,obj4)
  //{} -- considered as target obj , optional but recommended


//recommended
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// for db 
const users = [
    {
        id : 1, 
        email : "a@mail.com"
    },
    {
        id : 3, 
        email : "a@mail.com"
    },
    {
        id : 3, 
        email : "a@mail.com"
    }
    
]
users[1].email


// object properties
console.log(tinderUser);
console.log("Keys : ");
console.log(Object.keys(tinderUser));

console.log("Valuess : ");
console.log(Object.values(tinderUser));

console.log("Entries : ");
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));


//object destructuring

const course = {
    cname : "js in hindi",
    price : "999",
    instructor :"xyz"
}

// course.price

const {instructor : mentor} = course
console.log(mentor);


const navbar = ({company}) =>{

}
navbar(company = "hitest")

