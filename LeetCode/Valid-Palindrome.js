// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function isLetter(s) {
  const code = s.toLowerCase().charCodeAt(0);
  return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
}

function isPalindrome(string) {
  let x = 0;
  let y = string.length - 1;

  while (x <= y) {
    while (!isLetter(string[x]) && x < y) {
      x += 1;
    }
    while (!isLetter(string[y]) && y > x) {
      y -= 1;
    }
    if (string[x].toLowerCase() !== string[y].toLowerCase()) {
      return false;
    }
    x++;
    y--;
  }

  return true;
}

console.log(isPalindrome('0P'));