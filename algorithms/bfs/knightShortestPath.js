//  Given a knight in a chessboard (a binary matrix with 0 as empty and 1 as barrier) with a source position, find the shortest path to a destination position, return the length of the route.
//  Return -1 if destination cannot be reached.
//
//  Example
//  [[0,0,0],
//   [0,0,0],
//   [0,0,0]]
//  source = [2, 0] destination = [2, 2] return 2
//
//  [[0,1,0],
//   [0,0,0],
//   [0,0,0]]
//  source = [2, 0] destination = [2, 2] return 6
//
//  [[0,1,0],
//   [0,0,1],
//   [0,0,0]]
//  source = [2, 0] destination = [2, 2] return -1
//  Clarification
//  If the knight is at (x, y), he can get to the following positions in one step:

//  (x + 1, y + 2)
//  (x + 1, y - 2)
//  (x - 1, y + 2)
//  (x - 1, y - 2)
//  (x + 2, y + 1)
//  (x + 2, y - 1)
//  (x - 2, y + 1)
//  (x - 2, y - 1)

//@param grid: a chessboard included 0 (false) and 1 (true)
//@param source: a point
// @param destination: a point
// @return: the shortest path

const checkBound = (grid, x, y) => {
  const n = grid.length;
  const m = grid[0].length;

  if (x < 0 || x >= n) return false;
  if (y < 0 || y >= m) return false;

  return grid[x][y] === 0;
};

const shortestPath = (grid, source, destination) => {
  if (grid === null || grid.length === 0 || grid[0].length === 0) {
    return -1;
  }
  const xDeirection = [1, 1, -1, -1, 2, 2, -2, -2];
  const yDirection = [2, -2, 2, -2, 1, -1, 1, -1];

  let step = 0;

  let queue = [];
  let nextQueue = [];

  queue.push(source);

  while (queue.length !== 0) {
    const position = queue.shift();
    if (position[0] === destination[0] && position[1] === destination[1]) {
      return step;
    }

    for (let i = 0; i < 8; i += 1) {
      const hori = position[0] + xDeirection[i];
      const vert = position[1] + yDirection[i];
      if (checkBound(grid, hori, vert)) {
        nextQueue.push([hori, vert]);
        grid[hori][vert] = 2;
      }
    }

    if (queue.length === 0) {
      step += 1;
      queue = [...nextQueue];
      nextQueue = [];
    }
  }
  return -1;
};

console.log(shortestPath(
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [2, 0],
  [2, 2],
));
