// Flatten a binary tree to a fake "linked list" in pre-order traversal.
//
// Here we use the right pointer in TreeNode as the next pointer in ListNode.
// Example 1:
//
// Input:
// {1,2,5,3,4,#,6}
//      1
//     / \
//    2   5
//   / \   \
//  3   4   6
// Output:
// {1,#,2,#,3,#,4,#,5,#,6}
// 1
// \
//  2
//   \
//    3
//     \
//      4
//       \
//        5
//         \
//          6

const flatten = (root) => {
  dfs(root);
};

const dfs = (node) => {
  if (node === null) return null;
  const leftLastNode = dfs(node.left);
  const rightLastNode = dfs(node.right);

  if (leftLastNode !== null) {
    leftLastNode.right = node.right;
    node.right = node.left;
    node.left = null;
  }

  if (rightLastNode !== null) {
    return rightLastNode;
  }

  if (leftLastNode !== null) {
    return leftLastNode;
  }

  return node;
};
