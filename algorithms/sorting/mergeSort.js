const merge = (left, right) => {
  const newArray = [];
  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      newArray.push(left[l]);
      l++;
    } else {
      newArray.push(right[r]);
      r++;
    }
  }
  // if (l < left.length) {
  //   newArray.concat(left.slice(l));
  // }
  // if (r < right.length) {
  //   newArray.concat(left.slice(l));
  // }
  return newArray.concat(left.slice(l)).concat(right.slice(r));
};

const mergeSort = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  if (arr.length === 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([2, 4, 3, 2, 1, 5, 6, 7, 9, 0]));
console.log(mergeSort([5, 6, 33, 9, 0]));
console.log(mergeSort([]));
console.log(mergeSort());
