// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

function lengthOfLongestSubstring(s) {
  let max = 0;
  let l = 0;
  let r = 0;
  const hash = new Set();

  while (r < s.length) {
    if (!hash.has(s[r])) {
      const length = r - l + 1;
      if (length > max) {
        max = length;
      }
      hash.add(s[r]);
    } else {
      while (s[l] !== s[r]) {
        hash.delete(s[l]);
        l++;
      }
      l++;
    }
    r++;
  }

  return max;
}

console.log(lengthOfLongestSubstring('tmmzuxt'));