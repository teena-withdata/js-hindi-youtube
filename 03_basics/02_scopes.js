// Story of scopes begin with three keywords -> let, var, const

let a = 1;
const b = 2;
var c = 3;

console.log(a);
console.log(b);
console.log(c);

// Curly braces {} => scope

// problem

if(true) {
    let d = 10;
    const e = 20;
    var f = 30;  // it can be redeclared plus re-initialised
}
console.log(d); // this will throw error as we are trying to access d outside block of if.

console.log(e); // this will also throw error 

console.log(f); // this will print 30 and that is the problem, it shouldn't be accessed outside block of if.

/*
Note! => code written in global scope can be accessed in the block scope but the vice-versa
         is not true

Note! => Global scope in console and node js environment (production code) is different
*/
        
