// const tinderUser = new Objects()  //  to declare Singleton object
const tinderUser = {}    // Non-Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "teena",
            lastname: "sharma"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2 }

//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}  // to merge object use spread operator
console.log(obj3);

// in database

const users = [
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

// to return keys of object
console.log(Object.keys(tinderUser));

// to return values of object
console.log(Object.values(tinderUser));

// to return entries of object
console.log(Object.entries(tinderUser));

// to check property of object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Destructuring of the object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "teena"
};

// course.courseInstructor

const {courseInstructor} = course;
console.log(courseInstructor);  /* this will give us the courseInstructor but i feel 
                                 courseInstructor is very long instead i want to use
                                 small name  */

const{courseInstructor:instructor} = course;
console.log(instructor);
/* Like this we can use another name of it as well 
we will use destructing of the object in React

To give our work to other we use API
From api we get the values in the form of json,
 basically json is the object in the javascript 


{
    "name" = "teena",
    "coursename": "js in hindi",
    "price": "free"

};
*/

// we use api in arrays to

[
    {},
    {},
    {}
]


// In the json we get the keys as well in the string
// Some time we get the response from the api in the form of the arraywhere has many
// objects inside it.