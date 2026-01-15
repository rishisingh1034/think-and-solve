// Pattern: Two Pointers

// Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order (means can have duplicates), remove the duplicates in-place(means modify the existing array don't create new) such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
let num = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

var removeDuplicates = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[k]) {
            k = k + 1;
            nums[k] = nums[i];
        }
    }
    console.log(nums)
    return k + 1;
};

console.log(removeDuplicates(num))
