// 1. call
function sum(a, b, c) {
  console.log(this);
  return `${this.desc}: ${a + b + c}`;
}

const sumInfo = {
  desc: 'Your result',
}

// console.log(sum.call(sumInfo, 1, 2, 3));

// 2. apply
// console.log(sum.apply(sumInfo, [1, 2, 3]));

// 3. Borrow a method
function sum2(...args) {
  // console.log([].slice.call(arguments));
  // return [].reduce.call(arguments, (acc, item) => acc + item);
  console.log(args);
  return args.reduce((acc ,item) => acc + item);
}

let array = [1, 2, 3, 4, 5 ,6];
// console.log(Math.max.apply(null, array));

// 4. Aux methods

const sumNew = sum.bind(sumInfo);
console.log(sumNew(1, 2, 3));

sum2(1, 2 ,3);