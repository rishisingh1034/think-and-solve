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
console.log(user);

// 2nd part
// dynamically add the value in the object
const property = "firstName";
const name = "Rishi Singh";

const data = {
    [property]: name
}

console.log(data)

// Loop through the objects

const user1 = {
    name: "Rishi Singh",
    age: 21
}

// to loop through the object we need to use for in loop

for (key in user1) {
    console.log(key, user1[key])
}

// Interview ques 1:
const obj = {
    a: "one",
    b: "two",
    a: "three"
}

console.log(obj)