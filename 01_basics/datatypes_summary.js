// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 345678990n


// Refernece type (Non primitive)

// Array, Objects, Function 

const heroes = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
    
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitve)

let myName = "TeenaSharma"

let anotherName = myName
anotherName = "tina"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com"
    upi: "user@byl"
}

let userTwo = userOne

userTwo.email = "teena@google.com"

console.log(userOne.email);
console.log(userTwo.email);


/* datatypes are based on memory allocation
primitive datatypes-> call by value
(string,number,boolean,null,undefined,bigInt,symbol) -> Stack memory

Reference/Non primitive data types -> call by reference
(array,object,function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't 
need to specify the data type of a variable when you declare it. */


/* Primitive types:
1. stored in stack.
2. passed or assigned by value(call by value).
3. changes to copies don't affect the original.

   Reference types:
1. stored in heap.
2. accessed via references(stored in stack).
3. changing the value through another reference affects the original.
