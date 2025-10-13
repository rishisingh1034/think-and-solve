// write a function that counts the count of digits in a number

function countDigits(n) {
    let count = 0;
    if (n == 0) return 1;
    n = Math.abs(n)
    while (n > 0) {
        n = Math.floor(n / 10)
        count++
    }
    return count;
}

let num = -2340;

console.log(countDigits(num))