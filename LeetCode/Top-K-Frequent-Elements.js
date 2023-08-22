/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
  const map = new Map();

  for (let number of nums) {
    if (map.has(number)) {
      map.set(number, map.get(number) + 1);
    } else {
      map.set(number, 1);
    }
  }

  return Array
    .from(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(item => item[0]);
};

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));