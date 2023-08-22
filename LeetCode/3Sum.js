// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function threeSum(nums) {
  let result = [];
  const array = nums.sort((a, b) => a - b);
  console.log(array);
  for (let i = 0; i < nums.length - 1; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = array[i] + array[l] + array[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        result.push([array[i], array[l], array[r]]);
        l++;
        while (array[l] === array[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return result;
}

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));