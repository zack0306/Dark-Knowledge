// Description
// Given a mountain sequence of n integers which increase firstly and then decrease, find the mountain top.
//
// Example
// Given nums = [1, 2, 4, 8, 6, 3] return 8
// Given nums = [10, 9, 8, 7], return 10

const mountainSequence = (nums) => {
  if (nums === null || nums.length === 0) return null;
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  let i = 0;
  let j = len - 1;
  let leftmax = 0;
  let rightmax = 0;
  while (i <= j) {
    leftmax = Math.max(nums[i], leftmax);
    rightmax = Math.max(nums[j], rightmax);
    i++;
    j--;
  }
  return Math.max(leftmax, rightmax);
};

console.log(mountainSequence([1, 2, 4, 8, 6, 3]));
console.log(mountainSequence([10, 9, 8, 7]));
