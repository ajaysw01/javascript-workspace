const names = "Ajay";
const count = 50;
// console.log(names + count + "Value" ); //not recommeneded

//string interpolation
// console.log(`Hello my name is ${names} and my count is ${count}`);

//way 2 to declare
const gameName = new String("Ajju-bhai-com");
console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('j'));

const newStrign = gameName.substring(1,3)
console.log(newStrign);

//can give -ve values like slice

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const spaceString = "     ajay    ";
console.log(spaceString.trim());

const url = "https://ajay.com/ajay%20patil"

console.log(url.replace('%20','-'));
console.log(url.includes('ajay'));

console.log(gameName.split("-"));











