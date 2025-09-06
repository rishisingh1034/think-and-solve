// map, filter and reduce

// map method is used to create a new array from the existing one by applying function to each element of the first array

const nums = [1, 2, 3, 4];

const multiplyNum = nums.map((num, i, arr) => num * 2);
console.log(multiplyNum)

// filter method take each element in the array and apply a conditional statement against it

const moreThan = nums.filter((num) => num > 2)
console.log(moreThan)

//reduce method is used to reduce the array to a single value
// if there is not value it will take first element of array as initial value for acc

const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum)

// Polyfill

// Polyfill for map()

// map((callback,i,arr)=> {})

// 'this' is referring to the array we are targeting

Array.prototype.myMap = function (callback) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        temp.push(callback(this[i], i, this))
    }
    return temp;
}

const myNum = nums.myMap((num) => num * 2)
console.log("myNum", myNum)