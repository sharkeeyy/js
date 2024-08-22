function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const four = new TreeNode(4);
const two = new TreeNode(2);
const seven = new TreeNode(7);
const one = new TreeNode(1);
const three = new TreeNode(3);
const six = new TreeNode(6);
const nine = new TreeNode(9);

four.left = two;
four.right = seven;
two.left = one;
two.right = three;
seven.left = six;
seven.right = nine;


function bFS(root) {
  const result = [];
  const queue = [];
  if (root) queue.push(root);

  while (queue.length) {
    const current = queue.shift();
    result.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return result;
}

function invertTree(root) {
  const queue = [];
  if (root) queue.push(root);

  while (queue.length) {
    const current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    [current.right, current.left] = [current.left, current.right];
  }

  return root;
}

function invertTreeRecursive(root) {
  if (root) {
    [root.left, root.right] = [root.right, root.left];
    invertTreeRecursive(root.left);
    invertTreeRecursive(root.right);
  }
}

console.log(bFS(four));

invertTreeRecursive(four);

console.log(bFS(four));


