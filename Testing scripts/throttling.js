function throttle(callback, ms) {
  let wait = false;
  let lastArgs;
  const timeoutFunc = () => {
    if (lastArgs === null) {
      wait = false;
    } else {
      callback.apply(this, lastArgs);
      lastArgs = null;
      setTimeout(timeoutFunc, ms);
    }
  };

  return function (...args) {
    if (wait) {
      lastArgs = args;
      return;
    }

    callback.apply(this, args);
    wait = true;

    setTimeout(timeoutFunc, ms);
  };
}
