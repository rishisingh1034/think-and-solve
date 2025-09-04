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