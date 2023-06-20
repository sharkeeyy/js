// 74. Search a 2D Matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function getCoords(x, n) {
  return [Math.floor(x / n), x % n];
}

var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  let start = 0;
  let end = n * m - 1;

  while (start <= end) {
    let place = Math.floor((end + start) / 2);
    let [i, j] = getCoords(place, n);

    if (matrix[i][j] === target) return true;
    if (matrix[i][j] < target) {
      start = place + 1;
    } else {
      end = place - 1;
    }
  }

  return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 0));