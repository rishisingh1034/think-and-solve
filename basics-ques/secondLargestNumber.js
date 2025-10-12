// find the second Largest in a Array

function secondLargestNumber(arr) {
    if (arr.length < 2) return null;

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(secondLargestNumber([5, 1, 2, 3, 4, 4, 5, 5]))
