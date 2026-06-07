// singleton

/* object literals: Naturally supports Singleton pattern by creating a single
instance and providing global access through a closure. it's straightforward
approach for ensuring only one instance. */

/* Constructor: By default, allows the creation of multiple instances. To
implement Singleton behavior with a constructor, additional logic is needed to
ensure only one instance is created and managed. */

const mySym = Symbol("key1")
const Juser = {
    "full name": "Teena Sharma",
    [mySym]: "mykey1",
    age: 20,
    location: "meerut",
    email: "teena@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Juser.email);
console.log(Juser["email"]);
console.log((Juser["full name"]));
console.log(Juser[mySym]);

Juser.email = "teena@chatgpt.com"
// Object.freeze(Juser)
Juser.email = "teena@microsoft.com"
console.log(Juser);

Juser.greeting = function(){
    console.log("Hello Juser");
    
}
Juser.greetingTwo = function(){
    console.log(`Hello Juser, ${this.name}`);
    
}

console.log(Juser.greeting());
console.log(Juser.greetingTwo());

// The reason of undefined is because the greeting function is not returning anything
//it is just printing that's why the return is undefined.

