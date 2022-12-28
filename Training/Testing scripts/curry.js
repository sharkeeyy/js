function sum(a, b ,c, d) {
  return a + b + c + d;
}

// function curry(func) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return func(a, b, c);
//       }
//     }
//   }
// }

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

const curriedSum = curry(sum);


console.log(curriedSum(1)(2)(3)(4));
console.log(curriedSum(1, 2)(3)(4));
console.log(curriedSum(1)(2, 3)(4));
console.log(curriedSum(1, 2, 3)(4));

