// Find N-th largest element in an array.

// Example
// In array [9,3,2,4,8], the 3rd largest element is 4.

// In array [1,2,3,4,5], the 1st largest element is 5, 2nd largest element is 4, 3rd largest element is 3 and etc.

//
// @param n: An integer
// @param nums: An array
// @return: the Kth largest element
//

const kthLargestElement = function (n, nums) {
    // write your code here
    if (nums === null) {
      return -1;
    }

    return partition(nums, 0, nums.length - 1, n);
};

const partition = function (nums, start, end, n){
    if (start === end) {
        return nums[start];
    }

    let left = start;
    let right = end;
    let pivot = nums[Math.floor((start + end) / 2)];

    while (left <= right) {
        while (left <= right && nums[left] < pivot) {
            left++;
        }
        while (left <= right && nums[right] > pivot) {
            right --;
        }
        if (left <= right) {
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] =  temp;
            left++;
            right--;
        }
    }
    if (nums.length - n <= right) {
        return partition(nums, start, right, n);
    }
    if (nums.length - n >= left) {
        return partition(nums, left, end, n);
    }
    return nums [left - 1];
};
