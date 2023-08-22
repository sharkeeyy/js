const a = (input) => input / 100;
const b = (input) => input + 10;
const c = (input) => input * 100;

function fn(fnArray) {
  return function(input) {
    let result = input; 
    for (let func of fnArray) {
      result = func(result);
    }
    return result;
  }
}

const composed = fn([a, b, c]);

console.log(composed(100));