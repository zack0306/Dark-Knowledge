// Definition for a binary tree node.
//  function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
//   }


const levelOrder = (root) => {
  const result = [];
  if (root === null) {
    return result;
  }

  let currentQueue = [];
  let nextQueue = [];
  let temp = [];
  currentQueue.push(root);

  while (currentQueue.length > 0) {
    const node = currentQueue.shift();
    temp.push(node.val);
    if (node.left) {
      nextQueue.push(node.left);
    }
    if (node.right) {
      nextQueue.push(node.right);
    }
    if (currentQueue.length === 0) {
      currentQueue = [...nextQueue];
      nextQueue = [];
      result.push(temp);
      temp = [];
    }
  }
  return result;
};
