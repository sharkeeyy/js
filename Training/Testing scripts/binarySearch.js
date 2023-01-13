const test = [...Array(15)].fill(0).map((item, i) => i + 1);

function binarySearchIterable(array, item) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let place = Math.floor((end + start) / 2);
    if (array[place] === item) return place;
    if (array[place] < item) {
      start = place + 1;
    } else {
      end = place - 1;
    }
  }

  return false;
}


function binarySearchRecursion(array, item, index) {
  const start = 0;
  const end = array.length - 1;
  const place = Math.floor(start + end / 2);

  if (array[place] === item) {
    console.log('Found');
    return place + index;
  } 

  if (start === end) {
    return false;
  }

  if (array[place] < item) {
    return binarySearchRecursion(array.slice(place + 1), item, place + index + 1)
  } else {
    return binarySearchRecursion(array.slice(0, place), item, index);
  }
}

console.log(binarySearchRecursion(test, 14, 0));