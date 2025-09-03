// Task: Write a program to check if each number in a given list is even or odd.

// Input: numbers (a list of integers)

// Output: A list of "Even" or "Odd" corresponding to each number

// Example:

// Input: numbers = [4, 7, 10]

// Output: ["Even", "Odd", "Even"]

let arr = [1, 1, 1]

function arrEvenOdd(arr = []) {
    let evenOddArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        const check = arr[i] % 2 == 0 ? "Even" : "Odd";
        evenOddArr.push(check)
    }
    return evenOddArr;
}

console.log(arrEvenOdd(arr))

// Task: Write a program to find common ingredients between two recipes.

// Input: recipe1 (an array of ingredient names) and recipe2 (an array of ingredient names)

// Output: An array of common ingredient names.

// Example:
// Output: ["Sugar", "Eggs"]

let arr1 = ["Flour", "Sugar", "Eggs"];
let arr2 = ["Sugar", "Butter", "Eggs"];

function commonIngredients(arr1 = [], arr2 = []) {
    const common = []
    for (let i = 0; i <= arr1.length - 1; i++) {
        let ingredient1 = arr1[i];
        for (let j = 0; j <= arr2.length - 1; j++) {
            let ingredient2 = arr2[j];
            if (ingredient1 == ingredient2) {
                common.push(ingredient2)
            }
        }
    }
    return common;
}

console.log(commonIngredients(arr1, arr2))

let sales = [50.5, 60.0, 45.75, 70.25, 55.0, 80.0, 65.5]

const output = sales.reduce((acc, e) => acc + e, 0);

console.log(output);

// Task: Write a program to find the highest temperature recorded in a week from a list of daily temperatures.

// Input: temperatures (an array of integers representing temperatures for each day)

// Output: The highest temperature.

// Example:

const temperatures = [30, 32, 28, 35, 33, 29, 31];

function maxNum(temp = []) {
    let max = 0;
    for (let i = 0; i <= temp.length - 1; i++) {
        max < temp[i] ? max = temp[i] : null;
    }
    return max
}

console.log(maxNum(temperatures))

// function factorial(num) {
//     let fact = 1;
//     for (let i = 2; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }

console.log(factorial(5))

function factorial(num) {
    if (num == 0 || num == 1) return 1;
    return num * factorial(num - 1)
}

