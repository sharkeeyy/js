/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const getSorted = (string) => string.split('').sort().join('');
 
function groupAnagrams(strs) {
  let map = new Map();
  for (let anagram of strs) {
    const hash = getSorted(anagram);
    if (map.has(hash)) {
      map.get(hash).push(anagram);
    } else {
      map.set(hash, [anagram]);
    }
  }
  
  return Array.from(map.values());
};

console.log(groupAnagrams(['abc', 'a', 'cba', 'bb']));