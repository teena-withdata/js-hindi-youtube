const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));

console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  //  value always come between 0 and 1
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


/* 
1- Understanding Math.random()
Math.random() generates a random decimal number between 0 and 1. 
This range includes 0 but excludes 1.
for e.g.- Math.random() might generate numbers like 0.234, 0.678, 0.999.

2- Multiplying Math.random()
When you multiply Math.random() by a number, like 10, you stretch the range:
Math.random()*10 will give a random number between 0 and just below 10.
(the highest value is possible to be close to 9.99999999999....)

3- Using Math.floor()
Math.floor(x) rounds down the number x to the nearest integer.
So, Math.floor(Math,random()*10) will convert the range [0,10)
to an integer range from 0 to 9'
You can get 0,1,2.....,9 but never 10.

4- Including 10 in the range
If you want to include 10 in the range, you need to change the multiplication factor:
Math.floor(Math.random()*11) will give you a range [0,11), and Math.floor()
will convert it to [0,10].

5- Shifting the range(Adding 1)
If you want the range to start from 1 instead of 0, you simply add 1 to the result:
Math.floor(Math.random()*10)+1 will give you a range from 1 to 10.
This works because now the range [0,9] gets shifted to [1,10].

6- Extending to Max-Min Concept
To generate a random integer between any min and max values, you use 
this formula:
Math.floor(Math.random()*(max - min + 1)) + min.
Example:- To get a number 5 and 15 (both inclusive):
Math.floor(Math.random()*(15 - 5 + 1)) + 5, 
this giving you a random integer between 5 to 15.
*/

   


