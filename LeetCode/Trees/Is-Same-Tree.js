function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const a = new TreeNode('A');
const b = new TreeNode('B');
const c = new TreeNode('C');
const d = new TreeNode('A');
const e = new TreeNode('B');
const f = new TreeNode('C');

a.left = b;
a.right = c;
d.left = e;
d.right = f;

function isSameTree(p, q) {
  const queueFirst = [];
  const queueSecond = [];
  if (p) queueFirst.push(p);
  if (q) queueSecond.push(q);

  while (queueFirst.length && queueSecond.length) {
    const currentFirst = queueFirst.shift();
    const currentSecond = queueSecond.shift();

    if (currentFirst?.val !== currentSecond?.val) return false;
    
    if (currentFirst) queueFirst.push(currentFirst.left);
    if (currentFirst) queueFirst.push(currentFirst.right);
    if (currentSecond) queueSecond.push(currentSecond.left);
    if (currentSecond) queueSecond.push(currentSecond.right);
  }

  if (queueFirst.length || queueSecond.length) return false;

  return true;
}

function isSameTreeRec(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false; 
  if (p.val !== q.val) return false;

  return isSameTreeRec(p.left, q.left) && isSameTreeRec(p.right, q.right);
}
