function sum(...args) {
  let result = args.reduce((acc, el) => acc + el, 0);

  function func(...args2) {
      result += args2.reduce((acc, el) => acc + el, 0);;
      return func;
  }

  func.toString = () => result;

  return func;
}

console.log(sum(1)(2)(3));