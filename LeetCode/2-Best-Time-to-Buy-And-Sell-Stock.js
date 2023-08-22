// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

function maxProfit(prices) {
  let profit = 0;
  let max = 0;

  let l = 0;
  let r = 1;

  while (r < prices.length) {
    profit = prices[r] - prices[l];
    if (profit > 0) max += profit;
    l++;
    r++;
  }

  return max;
}

console.log(maxProfit([7,1,5,3,6,4]));