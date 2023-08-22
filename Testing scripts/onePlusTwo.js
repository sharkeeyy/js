function numFunc(x) {
  return function(func) {
    if (typeof func === 'function') {
      return func(x);
    } else {
      return x;
    }
  }
}

const one = numFunc(1);
const two = numFunc(2);
const three = numFunc(3);
const four = numFunc(4);
const five = numFunc(5);
const six = numFunc(6);
const seven = numFunc(7);
const eight = numFunc(8);
const nine = numFunc(9);

const plus = (b) => function(a) { return a + b; }
const minus = (b) => function(a) { return a - b; }
const divide = (b) => function(a) { return a / b; }
const multiply = (b) => function(a) { return a * b; }

console.log(five(plus(one())));
console.log(five(minus(one())));
console.log(five(divide(two())));
console.log(five(multiply(two())));