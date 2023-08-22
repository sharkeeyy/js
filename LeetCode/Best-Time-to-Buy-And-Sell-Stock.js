// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices) {
  let max = 0;
  let l = 0;
  let r = 1;

  if (prices.length === 1) return max;

  while (r < prices.length) {
    const profit = prices[r] - prices[l];
    console.log(l, r, profit);
    if (profit > max) max = profit;
    if (profit < 0) {
      l = r;
    }
    r++;
  }

  return max;
}

maxProfit([7,1,5,3,6,4]);