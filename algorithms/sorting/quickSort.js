const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, left, right) => {
  // need fix the pivat at beginnng incase the array is swapping
  const pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (arr[left] < pivot) {
      left ++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
};

const quickSort = (arr, left, right) => {
  if (!Array.isArray(arr) || arr.length <= 0) {
    return null;
  }
  const partitionIndex = partition(arr, left, right);
  if (left < partitionIndex - 1) {
    quickSort(arr, left, partitionIndex - 1);
  }
  if (right > partitionIndex) {
    quickSort(arr, partitionIndex, right);
  }
  return arr;
};

console.log(quickSort([3, 4, 57, 1, 2, 33, 9, 5, 24], 0, 8));
console.log(quickSort([3, 3, 3, 0, 3], 0, 4));
console.log(quickSort([]));
console.log(quickSort());
