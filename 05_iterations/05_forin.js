// for in loop gives key directly unlike for of
const obj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    dt : 'dart'
}

//for in loop
for (const key in obj) {
    // console.log(obj[key]);
}

//arrays
const langauges = ['js','java','py','cpp']
for (const key in langauges) {
    console.log(langauges[key]);
    
}

//maps 
const map = new Map()
map.set('IN','India')
map.set('USA','United States')
map.set('FR','France')
map.set('JP','Japan')
for (const key in map) {
   console.log(key); // not iterable not print anything
}