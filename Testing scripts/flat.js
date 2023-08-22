function flat(array) {
  const result = [];

  const next = (token) => {
    if (Array.isArray(token)) {
      token.forEach(element => {
        next(element);  
      });
    } else {
      result.push(token);
    };
  }

  next(array);

  return result;
}

function flatThroughString(array) {
  return array.toString().split(',');
}

console.log(flat([0, [1, 2], [[3, 4], [5, 6]]]));