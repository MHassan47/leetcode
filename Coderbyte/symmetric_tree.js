// Given the root of a binary tree, check whether it is a mirror
// of itself (i.e., symmetric around its center).

const isSymmetric = (root) => {
  let result = true;

  const helper = (node1, node2) => {
    if (!node1 && !node2) {
      return;
    }

    if (!node1 || !node2 || node1.val !== node2.val) {
      result = false;
      return;
    }

    helper(node1.left, node2.right);
    helper(node1.right, node2.left);
  };
  helper(root, root);

  return result;
};

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 5]));
