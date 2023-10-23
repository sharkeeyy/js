function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const a = new TreeNode('A');
const b = new TreeNode('B');
const c = new TreeNode('C');
const d = new TreeNode('D');
const e = new TreeNode('E');
const f = new TreeNode('F');
const g = new TreeNode('G');
const h = new TreeNode('H');
const i = new TreeNode('I');

f.left = b;
f.right = g;
b.left = a;
b.right = d;
d.left = c;
d.right = e;
g.right = i;
i.left = h;

function recursiveStraight(root) {
  if (root) {
    console.log(root.val);
    recursiveStraight(root.left);
    recursiveStraight(root.right);
  }
}

function iterativeStraight(root) {
  const stack = [];

  if (root) {
    stack.push(root);
  }

  while (stack.length) {
    const current = stack[stack.length - 1];
    if (current.visited) {
      stack.pop();
    } else {
      current.visited = true;
      console.log(current.val);

      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }
}

iterativeStraight(f);
