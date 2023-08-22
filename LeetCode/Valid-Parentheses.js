// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(string) {
  const brackets = new Map([
    ['(',')'],
    ['{', '}'],
    ['[', ']'],
  ]);

  const stack = [];

  for (let s of string) {
    if (brackets.has(s)) {
      stack.push(s);
      continue;
    }
    const current = stack.pop();
    if (brackets.get(current) !== s) return false;
  }

  return stack.length === 0;
}

