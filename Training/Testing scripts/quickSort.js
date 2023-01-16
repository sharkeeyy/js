const test = [...Array(20)].fill(0).map((_, i) => Math.floor(Math.random() * 10) + 1 );

function quickSort(array) {
  if (!array.length) return [];

  let middle = Math.floor(array.length / 2);
  const left = [];
  const right = [];

  for (let i = 0; i < array.length; i++) {
    if (i === middle) continue;
    if (array[i] < array[middle]) {
      left.push(array[i])
    } else {
      right.push(array[i]);``
    }
  }

  return [...quickSort(left), array[middle], ...quickSort(right)];
}

console.log(test);

console.log(quickSort(test));