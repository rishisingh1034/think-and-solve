//what is closure?

// A closure is when a function “remembers” the variables from its lexical scope even after that scope has finished executing.

// Lexical Scope

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count)
    }
    return inner;
}

const fn = outer();
fn();
fn();
fn();

// closure scope chain

const e = 10;

function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + e;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4));

function createBase(num) {
    return function (num1) {
        return num + num1;
    }
}

var addSix = createBase(6);
console.log(addSix(10))

function find() {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }

    return function (index) {
        console.log(a[index])
    }
}

const closure = find();

closure(6)

// Q4: Block scope and setTimeout

// because var is function scoped
// setTimeout runs after complete code has run successfully
// so we have reference of that i variable in the memory

// solution using let instead of var for every iteration it create a new scope like
//{ i=0 } {i=1} {i=2} because let is block scoped

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i)
    }, 1000)
}

// another solution use closure

for (var i = 0; i < 3; i++) {

    function inner(i) {
        setTimeout(function log() {
            console.log(i)
        }, 1000)

    }
    inner(i)
}

// how would you use closure to create a private counter?

function counter() {
    var _count = 0;

    function add(num) {
        _count += num
    }

    function retrive(num) {
        return "Counter: " + _count;
    }

    return {
        add, retrive
    }
}

let co = counter();

co.add(5);
console.log(co.retrive())

// What is a module pattern?
// we do not return the private function which makes them inacessable outside the module

var Module = (function () {
    function privateFunction() {
        // do something
        console.log("Private")
    }

    return {
        public: function publicFunction() {
            console.log("public")
        }
    }
})()

Module.public();
// Module.privateFunction();

// make this run only once

let view;
function likeTheVideo() {
    let called = 0;
    if (called > 0) {
        console.log("already done")
    } else {
        view = "Coding"
        console.log(view);
        called++;
    }
}


// let isDone = likeTheVideo();

// isDone()

// Ques 8: Once polyfill

function once(func, context) {
    let ran;

    return function () {
        if (func) {
            ran = func.apply(context || this, arguments);
            func = null;
        }
        return ran;
    }
}

const hello = once(() => console.log("Hello"))

hello()
hello()
hello()


// Ques 9: Memoize Polyfill

function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args)
        }
        return res[argsCache];
    }
}

const clumsyProduct = (num1, num2) => {
    for (let i = 0; i <= 10000000; i++) { }
    return num1 * num2;
}

const memoizedFunction = myMemoize(clumsyProduct)

console.time("First Call");
console.log(memoizedFunction(9876, 1234));
console.timeEnd("First Call")

console.time("Second Call");
console.log(memoizedFunction(9876, 1234));
console.timeEnd("Second Call")


// difference between closure and scope