function getSubArray(array, compareArray) {
  let result = [];
  array.forEach((element, i) => {
    if (compareArray[i] === 1) result.push(element); 
  });

  return result;
}

function getSum(array) {
  return array.reduce((acc, item) => acc + item, 0);
}

function subarraySum(array, number) {
  const result = [];

  function generate(subarray) {
    if (subarray.length === array.length) {
      const resArray = getSubArray(array, subarray);
      if (number === getSum(resArray)) result.push(resArray);
    } else {
      generate([...subarray, 0]);
      generate([...subarray, 1]);
    }
  }

  generate([]);

  return result;
}

console.log(subarraySum([7, 8, 3, 4, 5, 6, 1, 2], 8));