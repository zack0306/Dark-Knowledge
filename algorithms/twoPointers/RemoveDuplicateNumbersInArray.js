/**
 * @param nums: an array of integers
 * @return: the number of unique integers
 */
const deduplication = function (nums) {
    // write your code here
  if (nums === null || nums.length === 0) {
      return [];
  }

  let duplicated = {}
  let i = 0;
  let j = 0;

  while (j< nums.length) {
    if (!duplicated[nums[j]]) {
      duplicated[nums[j]] = true;
      swap(nums,i,j);
      i++;
    }
    j++;
  }
  return i;
};
const swap = function (nums, left, right) {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
  return nums;
};
