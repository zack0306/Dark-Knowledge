// Find N-th largest element in an array.

// Example
// In array [9,3,2,4,8], the 3rd largest element is 4.

// In array [1,2,3,4,5], the 1st largest element is 5, 2nd largest element is 4, 3rd 
// largest element is 3 and etc.

//
// @param n: An integer
// @param nums: An array
// @return: the Kth largest element
//

const partition = (nums, start, end, n) => {
  const arr = nums;
  if (start === end) {
    return arr[start];
  }

  let left = start;
  let right = end;
  const pivot = arr[Math.floor((start + end) / 2)];

  while (left <= right) {
    while (left <= right && arr[left] < pivot) {
      left += 1;
    }
    while (left <= right && arr[right] > pivot) {
      right -= 1;
    }
    if (left <= right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left += 1;
      right -= 1;
    }
  }
  if (arr.length - n <= right) {
    return partition(arr, start, right, n);
  }
  if (arr.length - n >= left) {
    return partition(arr, left, end, n);
  }
  return arr[left - 1];
};

const kthLargestElement = (n, nums) => {
  // write your code here
  if (nums === null) {
    return -1;
  }

  return partition(nums, 0, nums.length - 1, n);
};
