function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);
const seven = new TreeNode(7);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
four.left = six;
four.right = seven;

var isBalanced = function(root) {
  if (!root) return true;
  
  const stack = [];
  let i = 0;
  const map = new Map();

  stack.push(root);

  while (stack.length > i) {
      const current = stack[i];
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
      i++;
  }

  while (stack.length) {
    const current = stack.pop();

    const heightLeft = current.left ? map.get(current.left) : 0;
    const heightRight = current.right ? map.get(current.right) : 0;
    const balance = Math.abs(heightLeft - heightRight);

    if (balance <= 1) {
      map.set(current, Math.max(heightLeft, heightRight) + 1);
    } else {
      return false;
    }

  }

  return true;
};

console.log(isBalanced(one));