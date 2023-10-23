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

function getAncestorsMapFromBFS(root) {
  const queue = [];
  const map = new Map();

  if (root) {
    queue.push(root);
    map.set(root, null);
  }

  while (queue.length) {
    const current = queue.shift();
    const ancestors = map.get(current) ?? [];

    if (current.right) {
      queue.push(current.right);
      map.set(current.right, [...ancestors, current]);
    }
    if (current.left) {
      queue.push(current.left);
      map.set(current.left, [...ancestors, current]);
    }
  }

  return map;
}

function lowestCommonAncestor(root, p, q) {
  const ancestors = getAncestorsMapFromBFS(root);
  const pMap = [...ancestors.get(p), p];
  const qMap = [...ancestors.get(q), q];
  
  let currentP = pMap.shift();
  let currentQ = qMap.shift();
  let lCA = currentP;

  while (currentP?.val === currentQ?.val) {
    lCA = currentP;
    currentP = pMap.shift();
    currentQ = qMap.shift();
  }

  return lCA;
}

console.log(lowestCommonAncestor(f, a, d));