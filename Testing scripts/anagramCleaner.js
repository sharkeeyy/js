let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aClean(array) {
  let map = new Map();
  for (let item of array) {
    let key = item.toLowerCase().split('').sort().join('');
    map.set(key, item);
  }

  return Array.from(map.values()); 
}

console.log(aClean(arr));