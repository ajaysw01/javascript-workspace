
//for of loop
const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);   
}
                                    
const greetings = "good morning"
for (const greet of greetings) {
    // console.log(greet);
}


//Maps datatypes 

const map = new Map()
map.set('IN','India')
map.set('USA','United States')
map.set('FR','France')
map.set('JP','Japan')
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':',value); 
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Last of us'
}

for (const [key,value] of myObj) {
    // console.log(key,':',value);//myobj not iterable
}

// for of loop doesn't work on objects
