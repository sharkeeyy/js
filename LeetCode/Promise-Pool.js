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

const promisePoolAsync = async function (functions, n) {
  const helper = () => functions[n++]?.().then(helper);

  await Promise.all(functions.slice(0, n).map((fn) => fn().then(helper)));
};

function pool(array, n) {
  return new Promise((resolve, reject) => {
    let pending = 0;
    let i = 0;
    let max = array.length - 1;

    function callback() {
      pending++;
      console.log('pending ', i);
      let k = i;
      array[i]().then(() => {
        console.log('done ', k);
        pending--;
        if (i > max && pending === 0) {
          resolve('End');
        } else if (i <= max) {
          callback();
        } else {
          return null;
        }
      });
      i++;
    }

    for (let j = 0; j < n && j <= max; j++) {
      callback();
    }
  });
}

const sleep = (t) => new Promise((res) => setTimeout(res, t));
pool([() => sleep(1000), () => sleep(1000), () => sleep(1000)], 1).then(console.log);
