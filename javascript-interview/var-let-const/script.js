// var vs let vs const
// scope

// var - functional scope, Hoisted top of their scope but initially intialized with undefined, redeclartion are allowed

// let - block scope, Hoisted but stays in TDZ untill initialized, no redeclartion but reassignment are allowed.

// const - block scope, Hoisted but stays in TDZ untill initialized,no reassign or redeclare but objects/arrays are mutable

// scope - A scope is a certain region of the program where the variables are exist and can be accessed.

// shadowing -Shadowing in JavaScript occurs when a variable declared in an inner scope (using `var`, `let`, or `const`) has the same name as one in an outer scope, thereby overriding access to the outer variable within that inner scope.

// Note:

// `let` and `const` are block-scoped and safely shadow outer variables.
// `var` is function-scoped and may cause unexpected behavior due to hoisting.

// Hoisting - It is a JS mechanism where variables and functions declarations are moved to the top of their scope during compilation.


// shadowing example

function test() {
    var a = "Hello";
    // let b = "Hi"

    if (true) {
        let a = "Shallow";
        // var b = "hiee"
        // console.log(b)
        console.log(a)
    }
    console.log(a)
}

test();

function abc() {
    console.log(a)
    var a = 5;
}

abc();