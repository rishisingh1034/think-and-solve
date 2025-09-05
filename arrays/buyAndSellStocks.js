// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

let prices = [7, 1, 5, 3, 6, 4];

var maxProfit0 = function (prices) {
    let globalProfit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const currentProfit = prices[j] - prices[i];

            if (currentProfit > globalProfit) globalProfit = currentProfit;
        }
    }
    return globalProfit;
}

console.log(maxProfit0(prices))

// solution: 2
// Greedy Alogrithm

var maxProfit = function (prices) {
    let minPrice = prices[0] || 0;
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (minPrice > prices[i]) minPrice = prices[i];
        profit = Math.max(profit, prices[i] - minPrice)
    }
    return profit;
}

console.log(maxProfit(prices))