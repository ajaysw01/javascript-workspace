const myNums = [1,2,3]

// const myTotal = myNums.reduce((accumulator, currValue) => {
//     console.log(`acc : ${accumulator} and currVal : ${currValue}`);
    
//     return accumulator + currValue
// },0)

//arrow funtcion
const myTotal = myNums.reduce((acc,curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// req : add all prices 

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price ,0)
console.log(priceToPay);
