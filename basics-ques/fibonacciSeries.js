// Write a JavaScript function that returns the Nth Fibonacci number.
// 0,1,1,2,3,5,8,13

// solution: 1
var fibonacci = function (n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}

// solution: 2
var fib = function (n) {
    const arr = [0, 1];

    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr[n]
}

let res = fib(6)
console.log(res)

//solution: 3
// fibonacci number using recursion

const fibRecursion = function (n) {
    if (n <= 1) return n;

    return fibRecursion(n - 1) + fibRecursion(n - 2)
}

console.log(fibRecursion(6))

// solution: 4

const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));