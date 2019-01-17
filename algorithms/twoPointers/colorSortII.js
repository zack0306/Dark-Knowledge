// Given an array of n objects with k different colors (numbered from 1 to k),
// sort them so that objects of the same color are adjacent, with the colors in the order 1, 2, ... k.

// Example
// Given colors=[3, 2, 2, 1, 4], k=4, your code should sort colors in-place to [1, 2, 2, 3, 4].

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const rainbowSort = (colors, left, right, from, to) => {
  if (from === to) {
    return;
  }
  if (left >= right) {
    return;
  }
  const midColor = Math.floor((from + to) / 2);
  let l = left;
  let r = right;
  while (l <= r) {
    while (l <= r && colors[l] <= midColor) {
      l++;
    }
    while (l <= r && colors[r] > midColor) {
      r--;
    }

    if (l <= r) {
      swap(colors, l, r);
      l++;
      r--;
    }
  }
  rainbowSort(colors, left, r, from, midColor);
  rainbowSort(colors, l, right, midColor + 1, to);
};

const sortColors2 = (colors, k) => {
  if (colors === null || colors.length === 0) {
    return null;
  }
  rainbowSort(colors, 0, colors.length - 1, 1, k);
};

let input = [3, 2, 2, 1, 4, 9, 2, 15, 1];
sortColors2(input, 15);
console.log('sorted', input);
