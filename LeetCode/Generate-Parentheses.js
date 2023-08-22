// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

function generateParenthesis(n) {
  const result = [];
  const stack = [];

  const backtrack = (opened, closed) => {
    if (opened === closed && opened === n) {
      result.push(stack.join(''));
    }

    if (opened < n) {
      stack.push('(');
      backtrack(opened + 1, closed);
      stack.pop();
    }

    if (opened > closed) {
      stack.push(')');
      backtrack(opened, closed + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);

  return result;
}

console.log(generateParenthesis(3));