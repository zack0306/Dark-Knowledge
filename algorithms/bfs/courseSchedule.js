// Description
// There are a total of n courses you have to take, labeled from 0 to n - 1.
//
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
//
// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
//
// Have you met this question in a real interview?
// Example
// Given n = 2, prerequisites = [[1,0]]
// Return true
//
// Given n = 2, prerequisites = [[1,0],[0,1]]
// Return false


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// Description
// There are a total of n courses you have to take, labeled from 0 to n - 1.
//
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
//
// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
//
// Have you met this question in a real interview?
// Example
// Given n = 2, prerequisites = [[1,0]]
// Return true
//
// Given n = 2, prerequisites = [[1,0],[0,1]]
// Return false


const canFinish = (numCourses, prerequisites) => {
  const degree = [];
  const edge = [];
  const queue = [];

  for (let i = 0; i < numCourses; i += 1) {
    edge[i] = [];
    degree[i] = 0;
  }

  for (let prerequisite of prerequisites) {
    degree[prerequisite[0]]++;// 入度
    edge[prerequisite[1]].push(prerequisite[0]); //进阶课
  }

  for (const [index, value] of degree.entries()) {
    if (value === 0) {
      queue.push(index);
    }
  }

  let count = 0;

  while (queue.length !== 0 ) {
    const courseIndex = queue.pop();
    count ++;
    const size = edge[courseIndex].length;
    for (let i = 0; i < size; i ++) {
      degree[edge[courseIndex][i]] --;
      if (degree[edge[courseIndex][i]] === 0) {
        queue.unshift(edge[courseIndex][i])
      }
    }
  }
    return count === numCourses;
}
