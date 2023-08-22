const f = debounce(console.log, 500);


setTimeout(() => f(1), 0);
setTimeout(() => f(2), 0); 
setTimeout(() => f(3), 0);
setTimeout(() => f(4), 0);
setTimeout(() => f(5), 0); 
setTimeout(() => f(6), 600);
setTimeout(() => f(7), 700);
setTimeout(() => f(8), 800);
setTimeout(() => f(9), 900);
setTimeout(() => f(10), 1000);  


function debounce(callback, delay) {
  let timer;
  return function (...args) {
     clearTimeout(timer);
     timer = setTimeout(() => {
      callback.apply(this, args);
     }, delay);
  }
}