// for each
const coding = ['js','java','rust','cpp','python']

//pass callback funtiono
coding.forEach(function (val){
    // console.log(val); 
})

//arrow functions 
coding.forEach((val)=>{
    // console.log(val);
})

//normal function
function printme(item) {
    // console.log(item); 
}

coding.forEach(printme)

//other attributes
coding.forEach((item,index, arr) => {
    // console.log(item,index, arr);  
})

//array of objects

const myCoding = [
    {
        langName : "javascript",
        filename : "js"
    },
    {
        langName : "java",
        filename : "java"
    },
    {
        langName : "python",
        filename : "py"
    }
]

myCoding.forEach((item) => {
    // console.log(item.langName);
    // console.log(item.filename);
})

//  for each doesn't return any values
const values = coding.forEach((item) => {
    // console.log(item);
    return item
    
})

console.log(values); // undefined
