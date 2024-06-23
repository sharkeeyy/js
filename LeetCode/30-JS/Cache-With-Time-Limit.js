var TimeLimitedCache = function () {
  this.map = new Map();
  this.timeouts = {};
};

TimeLimitedCache.prototype.setCacheTimeout = function (key, value, duration) {
  this.map.set(key, value);

  const timeout = setTimeout(() => {
    this.map.delete(key);
    clearTimeout(this.timeouts[key]);
    delete this.timeouts[key];
  }, duration);
  this.timeouts[key] = timeout;
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  if (this.map.has(key)) {
    clearTimeout(this.timeouts[key]);
    this.setCacheTimeout(key, value, duration);

    return true;
  }

  this.setCacheTimeout(key, value, duration);

  return false;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.map.get(key) || -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.map.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1

setTimeout(() => {
  console.log(timeLimitedCache.count());
}, 2000);
