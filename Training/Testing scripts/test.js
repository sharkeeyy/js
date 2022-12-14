const field = '123';

const obj = {
  name: 'Ray',
  age: 25,
  10: 'value',
  [field]: '123',
}

const obj2 = Object.assign(obj);

const [a, ...array] = [1, 2, 3, 4 ,5]

function func() {
  return this;
}

console.log(func.apply(obj2));