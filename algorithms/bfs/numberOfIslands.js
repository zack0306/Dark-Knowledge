const bfs = (arr, i, j) => {
  if (i < 0 || j < 0 || i >= arr.length || j >= arr[i].length) {
    return null;
  }

  if (arr[i][j] !== 1) {
    return null;
  }

  arr[i][j] = 2;

  bfs(arr, i, j - 1);
  bfs(arr, i, j + 1);
  bfs(arr, i + 1, j);
  bfs(arr, i + 1, j);
};

const findIslandsNumber = (arr) => {
  let number = 0;
  if (!Array.isArray(arr) || arr === null) {
    return null;
  }

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === 1) {
        number += 1;
        bfs(arr, i, j);
      }
    }
  }
  return number;
};

console.log(findIslandsNumber([
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
]));
