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

function dFS(root) {
  const stack = [];
  const visited = new Map();
  const path = new Map();
  let max = 0;

  if (root) {
    stack.push(root);
    path.set(root, 1);
  }

  while (stack.length) {
    const current = stack[stack.length - 1];

    if (visited.has(current)) {
      stack.pop();
    } else {
      visited.set(current, true);
      const currPath = path.get(current);
      if (current.right) {
        stack.push(current.right);
        path.set(current.right, currPath + 1);
      }
      if (current.left) {
        stack.push(current.left);
        path.set(current.left, currPath + 1);
      }
      if (!current.left && !current.right) {
        max = Math.max(max, currPath);
      }
    }
  }
  return max;
}

function maxDepth(root) {
  let max = 0;

  const backtrack = (root, depth) => {
    if (root) {
      if (depth > max) {
        max = depth;
      }
      backtrack(root.left, depth + 1);
      backtrack(root.right, depth + 1);
    }
  }

  backtrack(root, 1);

  return max;
}

function maxDepth2(root) {
  if (!root) {
    return 0;
  }

  const left = maxDepth2(root.left);
  const right = maxDepth2(root.right);

  return Math.max(left, right) + 1;
}

console.log(maxDepth2(four));