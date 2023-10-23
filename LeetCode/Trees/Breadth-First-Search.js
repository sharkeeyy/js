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

function iterativeBFS() {
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
