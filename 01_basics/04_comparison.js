console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);  // comparison should be between same data type

console.log (null > 0);
console.log (null == 0);
console.log (null >= 0);

// The reason is that an equality check == and comparisons > <>= <= work differently.
//Comparisons convert null to a number, treating it as 0.
// that's why (3) null >=0 is true and (1) null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (strictly check)

console.log("2" == 2);

