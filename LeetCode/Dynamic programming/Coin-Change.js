// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

function coinChange(coins, amount) {
  const dp = {};
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    let result = Infinity;
    for (let coin of coins) {
      const step = i - coin;
      if (step < 0) continue;
      
      result = Math.min(result, dp[step] + 1);
    }

    dp[i] = result;
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([2], 0));

