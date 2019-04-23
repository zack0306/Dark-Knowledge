const TreeNode = (val) => {
  this.val = val;
  this.left = null;
  this.right = null;
};

const serialize = (root) => {
  if (root === null) return [];
  const result = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) {
      result.push(null);
    } else {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return result;
};

const deserialize = (data) => {
  console.log('data', data);
  if (data === null || data.length === 0) {
    return null;
  }

  const root = new TreeNode(data.shift());
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    const nextLeftNodeVal = data.shift();
    const nextRightNodeVal = data.shift();
    node.left = nextLeftNodeVal || nextLeftNodeVal === 0 ? new TreeNode(nextLeftNodeVal) : null;
    node.right = nextRightNodeVal || nextRightNodeVal === 0 ? new TreeNode(nextRightNodeVal) : null;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};
