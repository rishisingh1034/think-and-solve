// Objects in JS

// delete keyword in js used to delete property in the objects

// const func = (function (a) {
//     delete a;
//     return a;
// })(5)

// console.log(func)

const user = {
    name: "Rishi Singh",
    age: 21,
    "like the video": true,
}
// we can access property using either user.name and user["like the video"](but in "")

delete user["like the video"]
// console.log(user);

// 2nd part
// dynamically add the value in the object
const property = "firstName";
const name = "Rishi Singh";

const datas = {
    [property]: name
}

// console.log(datas)

// Loop through the objects

const user1 = {
    name: "Rishi Singh",
    age: 21
}

// to loop through the object we need to use for in loop

for (key in user1) {
    // console.log(key, user1[key])
}

// Interview ques 1:
const obj = {
    a: "one",
    b: "two",
    a: "three"
}

// console.log(obj)

// Ques 2: create a function multiplyByTwo(obj) that multiplies all the numeric property of nums by 2

let objs = {
    a: 100,
    b: 200,
    c: "My nums"
}

function multiplyByTwo(obj) {
    for (key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2;
        } else {
            console.log(`${obj[key]} is a string`)
        }
    }
    return obj
}

console.log(multiplyByTwo(objs))

// Ques 3: output

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b])

// ans 456 why??

// ques 3: JSON.stringify and JSON.parse?

const user2 = {
    name: "Rishi",
    age: 21
}
// converts objs into string
// use case: storing localStorage(localStorage stores into strings)
const strObj = JSON.stringify(user2);

console.log(strObj)

// Converts strings into objs
console.log(JSON.parse(strObj))

// spread operator
console.log([..."lydia"])
// spread every letter into a single string

// ques 6:
const users = { name: "rishi", age: 21 }
const users1 = { place: "home", ...users }
console.log(users1)

console.log(JSON.stringify(users, ['name']))//this will only stringify name property

// Destructuring in objects

let user3 = {
    names: "rishi",
    age: 21,
    data: {
        gender: "male",
        height: 178
    }
}

const { names: myName, data: { gender } } = user3
console.log(myName, gender)

// shallow vs deep copy
// shallow copy - when we copy one object into another object but the 2nd object will still have reference of original object.
// deep copy - when we clone one obj into another variable then it doesn't have reference of original obj.

let user4 = {
    name: "Rishi",
    age: 24
}

const objClone1 = Object.assign({}, user4); // this will not work in nested objects
const objClone2 = JSON.parse(JSON.stringify(user4));
const objClone3 = { ...user4 }
user4.age = 21

console.log("new: ", objClone3)