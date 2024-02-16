function sum(a, b ,c, d) {
  return a + b + c + d;
}

function curry(func) {
  return function fn(...args) {
    if (args.length >= func.length) {
      return func.call(this, ...args);
    } else {
      return function(...otherArgs) {
        return fn.apply(this, args.concat(otherArgs));
      }
    }
  }
}

const curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4));
console.log(curriedSum(1)(2, 3, 4));
console.log(curriedSum(1, 2)(3, 4));
console.log(curriedSum(1, 2, 3)(4));