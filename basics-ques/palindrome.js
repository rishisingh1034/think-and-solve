//write a function showing palindrome for numbers.

function palindromeNumber(num) {

    num = num.toString()

    let left = 0;
    let right = num.length - 1;

    while (left < right) {
        if (num[left] !== num[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
}

var palindrome = function (x) {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("")
}

const res = palindrome(121)
console.log(res)

console.log(palindromeNumber(121));

// write a function showing palindrome for strings

function palindromeString(str) {
    str = str.toLowerCase()

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(palindromeString("Dad"))

// palindrome
function palin(x) {
    let copyX = x;
    if (x < 0) return false;
    let rev = 0;
    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }
    return copyX === rev;
}

console.log(palin(2221))