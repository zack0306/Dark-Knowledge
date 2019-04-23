const closestValue = (root, target) => {
  if (root === null) return null;

  return dfs(root, target).val;
};

const dfs = (node, target) => {
  let closest = null;
  if (node === null) return null;
  if (node.val === target) return node;
  if (node.val > target) {
    closest = dfs(node.left, target);
  } else {
    closest = dfs(node.right, target);
  }

  if (closest === null) return node;

  return Math.abs(target - closest.val) < Math.abs(target - node.val) ? closest : node;
};
