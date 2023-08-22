const object = [
  [[0, 0], [1, 2, 3]],
  [[1, 1], [1, 2, 3]],
  [[5, 6], [1, 2, 3]],
]

function generateSet(set, n) {
  if (set.length === n) {
    console.log(set);
  } else {    
    object[set.length][1].forEach(item => {
        set.push(item);
        generateSet(set, n);
        set.pop();
      })  
  }
}

function sequence(number) {
  const stack = [];

  const backtrack = () => {
    if (stack.length === number) {
      console.log(stack.join(''));
      return;
    }
    [0, 1].forEach((digit) => {
      stack.push(digit);
      backtrack();
      stack.pop();
    })
  }

  backtrack();
}

sequence(5);