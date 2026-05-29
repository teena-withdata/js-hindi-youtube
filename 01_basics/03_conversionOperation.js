let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN but type is a number
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "teena" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(someNumber);
console.log(typeof someNumber);

//********************************** Operations ************************************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2*2);
console.log(2-2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let str1 = "hello"
let str2 = " teena"

let str3 = str1 + str2
console.log(str3);


// the problem is :-

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let gameCounter = 100
gameCounter++;   // prefix and sufix from mdn
console.log(gameCounter);








