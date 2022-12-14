function getAnagrams(word) {
  let chosen = (new Array(word.length)).fill(0);
  let set = word.split('');
  let result = [];

  function generateWithoutRepetitions(array, chosen, n) {
    if (array.length === n) {
      result.push(array.join(''));
    } else {
      for (let i = 0; i < n; i++) {
        if (chosen[i] === 1) continue;
        chosen[i] = 1;
        array.push(set[i]);
        generateWithoutRepetitions(array, chosen, n);
        chosen[i] = 0;
        array.pop();
      }
    }
  }

  generateWithoutRepetitions([], chosen, word.length);

  return result;

}

console.log(getAnagrams('123'));




