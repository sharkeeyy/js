// Given an integer array nums of unique elements, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

function subsets(nums) {
  const result = [];

  const backtrack = (current, i) => {
    if (i === nums.length) {
      result.push([...current]);
    } else {
      current.push(nums[i]);
      backtrack(current, i + 1);
      current.pop();
      backtrack(current, i + 1);
    }
  };

  backtrack([], 0);

  return result;
}

console.log(subsets([1, 2, 3]));
