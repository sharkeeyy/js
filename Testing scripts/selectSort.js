const test = (new Array(10)).fill(0).map(el => Math.floor(Math.random() * 10) + 1);

function selectSort(array) {

  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minPos = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        minPos = j;
      }
    }
    [array[i], array[minPos]] = [array[minPos], array[i]];
  }

  return array;
}

console.log(test);
console.log(selectSort(test));