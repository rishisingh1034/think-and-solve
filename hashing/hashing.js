let n = [5, 3, 2, 2, 1, 5, 5, 7, 5, 10];
let m = [10, 111, 1, 9, 5, 67, 2];

let hash = new Array(11).fill(0);

// Build frequency
for (let num of n) {
    if (num >= 1 && num <= 10) {
        hash[num]++;
    }
}

// Query
for (let x of m) {
    if (x >= 1 && x <= 10) {
        console.log(hash[x]);
    } else {
        console.log(0);
    }
}

// object

let hashMap = {};

// Build frequency
for (let num of n) {
    hashMap[num] = (hashMap[num] || 0) + 1;
}

// Query
for (let x of m) {
    console.log(hashMap[x] || 0);
}