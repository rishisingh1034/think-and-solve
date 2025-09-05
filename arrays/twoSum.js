//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let nums = [2, 2, 7, 7];
target = 9;

//solution: 1
//brute force
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return []
}

console.log(twoSum(nums, target))

//solution: 2
//objects

var twoSum = function (nums, target) {
    var obj = {};
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];

        if (obj[target - n] >= 0) {
            return [obj[target - n], i]
        } else {
            obj[n] = i;
        }
    }
}