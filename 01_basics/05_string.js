const name = "teena"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('teena-ts-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName. charAt(2));
console.log(gameName.indexOf('t'));

console.log(gameName.substring(0, 4));

const anotherString = gameName.slice(-3, 2)
console.log(anotherString);

const newStringOne = "   teena   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://teena.com/teena%20sharma"

console.log(url.replace('%20', '-'));

console.log(url.includes('teena'));

console.log(gameName.split('-'));







