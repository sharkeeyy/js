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

function getPathOne(root) {
  const backtrack = (root, array) => {
    const newArray = array.concat(root.val);
    if (!root.left && !root.right) {
      console.log(newArray);
    }

    if (root.left) backtrack(root.left, newArray);
    if (root.right) backtrack(root.right, newArray);
  }

  backtrack(root, []);
}

function getPathTwo(root) {
  const path = [];

  const backtrack = (root) => {
    if (!root.left && !root.right) {
      console.log(path.concat(root.val));
    }

    path.push(root.val);
    if (root.left) backtrack(root.left);
    if (root.right) backtrack(root.right);
    path.pop();
  }

  backtrack(root);
}

getPathTwo(four);