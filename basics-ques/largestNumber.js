
function largestNumber(arr) {
    let largestNumber = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > largestNumber) largestNumber = arr[i];
    }
    return largestNumber;
}

console.log(largestNumber([1, 2, 7, 4, 5]))