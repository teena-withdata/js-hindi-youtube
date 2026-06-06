// Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 26)
console.log(myCreatedDate.toDateString());

let newDate = new Date(2026, 2, 25, 7, 8)
console.log(newDate.toLocaleString());

let aDate = new Date("2026-01-14")
console.log(aDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));  // get in second

let dDate = new Date()
console.log(dDate);
console.log(dDate.getMonth()+ 1);
console.log(dDate.getDay());


dDate.toLocaleString('default', {
    weekday: "long",
})


