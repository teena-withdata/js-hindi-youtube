
function sayMyName(){
    console.log("T");
    console.log("E");
    console.log("E");
    console.log("N");
    console.log("A");
    
}

sayMyName()

/* function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);            // this return undefined
    
}

// addTwoNumbers(3, 4)
const result = addTwoNumbers(3, 4)
console.log(result); */


function addTwoNumbers(number1, number2) {
   // let result = number1 + number2
   // return result
   return number1 + number2
    
}

// addTwoNumbers(3, 4)
const result = addTwoNumbers(3, 4)
console.log("Result: ",result);


function loginUserMessage(username) {
    if(username == undefined) {
        console.log("Please enter a username");
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("teena"));


function calculateCartPrice(...num1) {  // for more than one value
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

