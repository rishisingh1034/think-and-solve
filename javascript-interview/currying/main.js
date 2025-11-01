// currying: Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.

// Why should we use currying?
// It makes a function pure which makes it expose to less errors and side effects.
// It helps in avoiding the same variable again and again.
// It is a checking method that checks if you have all the things before you proceed.
// It divides one function into multiple functions so that one handles one set of responsibility.

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(sum(2)(6)(1))

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === "sum") return a + b;
            else if (operation === "multiply") return a * b;
            else if (operation === "divide") return a / b;
            else return a - b;
        }
    }
}
const mul = evaluate("multiply")
console.log(mul(3)(5))
console.log(evaluate("multiply")(4)(2))

// Infinite currying

function add(a) {
    return function (b) {
        if (b) return add(a + b)
        return a
    }
}

console.log(add(5)(2)(4)(3)(1)())

// currying vs partial application
// partial application means providing more than one argument in the currying function

function sum(a) {
    return function (b, c) {
        return a + b + c;
    }
}

console.log(sum(2)(3, 4))

// Manipulating DOM

function updateElementText(id) {
    return function (content) {
        document.querySelector('#' + id).textContent = content;
    }
}

const updateHeader = updateElementText("heading");

updateHeader("Rishi Singh")

// converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args)
        } else {
            return function (...next) {
                return curriedFunc(...args, ...next)
            }
        }
    }
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(1)(6)(4)(2))