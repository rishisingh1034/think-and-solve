// Polyfill: A polyfill is a piece of code that adds missing features to older browsers or environments, so modern JavaScript works everywhere.

// Polyfill for map()

// map((callback,i,arr)=> {})

// 'this' is referring to the array we are targeting

Array.prototype.myMap = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this))
    }
    return arr
}

// Polyfill for filter()
// filter((callback,i,arr)=>{})

Array.prototype.myFilter = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) arr.push(this[i])
    }
    return arr;
}

const myPolyfillFilter = nums.myFilter((num) => num > 2)
console.log(myPolyfillFilter)

// Polyfill for reduce()
// reduce((acc,curr,i,arr)=>{updatedArr,initialValue})

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? callback(accumulator, this[i], i, arr) : this[i];
    }
    return accumulator
}

const myPolyfillReduce = nums.reduce((acc, num) => acc + num);
console.log(myPolyfillReduce)