// Description
// Find the last position of a target number in a sorted array. Return -1 if target does not exist.

// Example
// Given [1, 2, 2, 4, 5, 5].

// For target = 2, return 2.

// For target = 5, return 5.

// For target = 6, return -1.

const lastPosition =  (nums, target) => {
  let position = -1;
  if (nums === null || nums.length === 0) return position;
  let i = 0;
  let j = nums.length;
  while (i <= j) {
    if (nums[i] === target) {
      position = i;
    }
    if (nums[j] === target) {
      return j;
    }
    i++;
    j--;
  }
  return position;
};

const testNums = [1, 2, 2, 4, 5, 5];
console.log(lastPosition(testNums, 2));
console.log(lastPosition(testNums, 5));
console.log(lastPosition(testNums, -1));
