// Functions in JS

// Q1) function declaration or defination or statement

function square(num) {
    return num * num;
}

// Q2) function expression - when you store a function in a variable that is function expression

// here the function is a anonymous function

const fun = function (num) {
    return num * num;
}

// Q3) First class functions: when a function can be treated as variable that is first clas fun that can be passed as args

function displayFunction(fn) {
    console.log("First class fn:" + fn(5))
}

// displayFunction(square)

// Q4) IIFE(Immidiately Invoke function Expression): 

(function triple(num) {
    console.log(num * num * num);
})(3);

// Q4) Spread vs Rest operator

// Spread (...): Expands elements of an array/object into individual items.

// Rest (...): Collects multiple elements into a single array/object. Rest param should be the last param (1,2,3,...arr)

function multiply(...nums) { // here it is called rest operator
    console.log(nums[0] * nums[1])
}

var arr0 = [5, 6];
multiply(...arr0); // here it is called spread operator

// Spread (unpacks values)

// Array
const arr2 = [1, 2, 3];
console.log([...arr2, 4]); // [1, 2, 3, 4]

// Object
const obj = { a: 1, b: 2 };
console.log({ ...obj, c: 3 }); // { a: 1, b: 2, c: 3 }

// String
const str = "Hi";
console.log([...str]); // ['H', 'i']


// Rest (collects values)

// Function args
function demo(x, ...rest) {
    console.log(x);    // first value
    console.log(rest); // remaining values
}
demo(10, 20, 30); // 10, [20, 30]

// Array destructuring
const [first, ...others] = [5, 6, 7];
console.log(first, others); // 5 [6, 7]

// Object destructuring
const { a, ...restObj } = { a: 1, b: 2, c: 3 };
console.log(a, restObj); // 1 { b: 2, c: 3 }


// Q5) - Callback Function: A callback function is a function that is passed as an argument into another function, which is then invoked inside the outer function to complete some kind of action.

function fun1(name) {
    console.log("My name is ", name)
}

function fun2(callback) {
    callback("Rishi")
}

fun2(fun1)

// Q6) - Arrow Function: An Arrow function is a shorter syntax for writing functions in JavaScript. It also differs from regular functions in terms of how it handles this and other features like arguments.

const functionName = (parameters) => expression;

const square = x => x * x;  // No need for `return`


// Regular function
function sum(a, b) { return a + b; }

// Arrow function
const sum = (a, b) => a + b;

//`this` Binding:

//   Regular Functions: `this` depends on how the function is called.
//   Arrow Functions: `this` is lexically bound, meaning it is inherited from the surrounding context.

//4. Edge Cases of Arrow Functions:

// No Own `this`

// Arrow functions inherit `this` from the outer scope, unlike regular functions that define their own `this`.

// Regular function issue with `this`
function RegularFunction() {
    this.name = "Alice";
    setTimeout(function () {
        console.log(this.name);  // `this` refers to global object
    }, 1000);
}
new RegularFunction();  // Output: undefined (or error in strict mode)

// Correct `this` with arrow function
function ArrowFunction() {
    this.name = "Alice";
    setTimeout(() => {
        console.log(this.name);  // `this` refers to the ArrowFunction instance
    }, 1000);
}
new ArrowFunction();  // Output: Alice

// b. Cannot Be Used as Constructors

// Arrow functions cannot be called with `new` to create objects because they don’t have their own `this` or `prototype`.

const Person = (name) => { this.name = name; };
const person = new Person("Alice");  // TypeError: Person is not a constructor


// c. No `arguments` Object

// Arrow functions don’t have their own `arguments` object. You can use rest parameters (`...args`) for similar functionality.

function funArrow() {
    console.log(arguments)
}

fun(1, 2, 3)

const sum = () => { console.log(arguments); };  // ReferenceError
sum(1, 2, 3);  // Error: arguments is not defined

// Using rest parameters instead:
const sum = (...args) => { console.log(args); };  // Output: [1, 2, 3]
sum(1, 2, 3);

// d. Cannot Use `yield`

// Arrow functions cannot be used inside generator functions because they don’t have the `arguments` object or `this`.

const genFunc = () => { yield 1; };  // SyntaxError: Unexpected token yield


// 5. Summary:

// Arrow functions provide a concise syntax for functions and lexically bind `this`.
// Limitations:

//   Cannot be used as constructors (`new`).
//   Do not have their own `this`, `arguments`, or `prototype`.
//   Cannot be used with `yield` in generators.
