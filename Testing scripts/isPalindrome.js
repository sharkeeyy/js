function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - i - 1]) return false;
  }
  return true;
}

function isPalindromeRecursion(word) {
  if (word.length === 0 | word.length === 1) return true;
  if (word[0] === word[word.length - 1]) {
    return isPalindromeRecursion(word.slice(1, -1));
  } else {
    return false;
  }
}

console.log(isPalindrome(''));
console.log(isPalindrome('12321'));
console.log(isPalindrome('123321'));
console.log(isPalindrome('111222'));

console.log(isPalindromeRecursion('abcdcba'));
console.log(isPalindromeRecursion('12321'));
console.log(isPalindromeRecursion('123321'));
console.log(isPalindromeRecursion('111222111'));