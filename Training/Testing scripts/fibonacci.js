function fibR(n) {
  return (n <= 1) ? n : fibR(n - 1) + fibR(n - 2);
}

function fibI(n) {
  if (n === 0) return 0;
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  } 

  return b;
} 