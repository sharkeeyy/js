function lowestCommonAncestorRec(root, p, q) {
  if (root.val > p.val && root.val < q.val) return root;
  if (root.val < p.val && root.val > q.val) return root;
  if (root.val === p.val) return p;
  if (root.val === q.val) return q;
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
}

function lowestCommonAncestor(root, p, q) {
  const stack = [];
  if (root) stack.push(root);

  while (stack.length) {
    const current = stack.pop();
    if (current.val > p.val && current.val < q.val) return current;
    if (current.val < p.val && current.val > q.val) return current;
    if (current.val === p.val) return p;
    if (current.val === q.val) return q;
    if (current.val > p.val && current.val > q.val) stack.push(current.left);
    if (current.val < p.val && current.val < q.val) stack.push(current.right);
  }
}
