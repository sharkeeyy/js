// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function maxArea(height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;

  while (l < r) {
    const square = (Math.min(height[r], height[l])) * (r - l);
    if (square > max) {
      max = square;
    }

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
};

console.log(maxArea([2,3,4,5,18,17,6]));