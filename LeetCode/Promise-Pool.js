/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */

var promisePool = async function (functions, n) {
  return new Promise((resolve) => {
    let counter = 0;
    let pending = 0;

    function callback() {
      if (counter === functions.length && !pending) {
        resolve();
      }

      while (counter < functions.length && pending < n) {
        functions[counter]().then((res) => {
          console.log('ended');
          pending--;
          callback();
        });
        counter++;
        pending++;
        console.log('counter =', counter);
      }
    }

    callback();
  });
};

const promisePoolAsync = async function(functions, n) {
  const helper = () => functions[n++]?.().then(helper);

  await Promise.all(functions.slice(0,n).map(fn=> fn().then(helper)));
};

const sleep = (t) => new Promise((res) => setTimeout(res, t));
promisePool([() => sleep(1000), () => sleep(1000), () => sleep(1000)], 2).then(console.log);
