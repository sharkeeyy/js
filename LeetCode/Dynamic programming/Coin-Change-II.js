// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
// You may assume that you have an infinite number of each kind of coin.
// The answer is guaranteed to fit into a signed 32-bit integer.

// Example 1:

// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

function change(amount, coins) {
  const cache = {};

  const backtrack = (pointer, rest) => {
    if (rest === 0) return 1;
    if (rest < 0 || pointer >= coins.length) return 0;

    const hash = `${pointer}-${rest}`;
    if (cache[hash] !== undefined) return cache[hash];

    cache[hash] = backtrack(pointer, rest - coins[pointer]) + backtrack(pointer + 1, rest);
    return cache[hash];
  }

  return backtrack(0, amount);
};

function changeDP(amount, coins) {
  const dp = (new Array(amount + 1).fill(0));
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = 1; i <= amount; i++) {
      const step = i - coin;
      if (step >= 0) dp[i] += dp[step];
    }
  }

  return dp;
}

console.log(change(5, [1, 2, 5]));

