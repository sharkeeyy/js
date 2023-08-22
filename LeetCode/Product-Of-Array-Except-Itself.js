// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

function productExceptSelf(array) {
  let productPrefix = 1;
  let productPostfix = 1;
  const prefix = (new Array(array.length)).fill(1);
  const postfix = (new Array(array.length)).fill(1);

  for (let i = 0; i < array.length - 1; i++) {
    productPrefix = productPrefix * array[i];
    productPostfix = productPostfix * array.at(-i - 1);
    prefix[i + 1] = productPrefix;
    postfix[array.length - i - 2] = productPostfix;
  }

  return array.map((_, i) => prefix[i] * postfix[i]);
};

console.log(productExceptSelf([1, 2, 3, 4]));