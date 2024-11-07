// 33. Search in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let place = Math.floor((end + start) / 2);
    if (array[place] === target) return place;

    if (array[start] <= array[place]) {
      if (array[start] <= target && array[place] >= target) {
        end = place - 1;
      } else {
        start = place + 1;
      }
    } else {
      if (array[place] <= target && array[end] >= target) {
        start = place + 1;
      } else {
        end = place - 1;
      }
    }
  }

  return -1;
};

console.log(search([3,1], 1));