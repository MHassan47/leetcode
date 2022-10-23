// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes
// in the tree.
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.

const lowestCommonAncestor = function (root, p, q) {
  if (root === null) return;

  if (root === q || root === p) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (!left) return right;
  if (!right) return left;

  return root;
};
