function debounce(fn, t) {
  let timer;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, t);
  }
};

const log = debounce(console.log, 300);

log(0);
setTimeout(() => log(50), 50);
setTimeout(() => log(400), 400);
setTimeout(() => log(500), 500);
setTimeout(() => log(850), 850);
setTimeout(() => log(1000), 1000);