// Given a string s, partition s such that every substring of the partition is a palindrome.
//
// Return all possible palindrome partitioning of s.
//
// Given s = "aab", return:
//
// [
//   ["aa","b"],
//   ["a","a","b"]
// ]

const partition = (s) =>  {
  if (s === null || s.length === 0) return null;

  const result = [];
  dfs(s, 0, [], result);
  return result;
};

const isPalindrome = (s, i, j) => {
  if (s === null || s.length === 0) return false;
  let head = i;
  let tail = j;
  while (head <= tail) {
    if (s[head] === s[tail]) {
      head += 1;
      tail -= 1;
    } else {
      return false;
    }
  }
  return true;
};

const dfs = (s, deepth, path, result) => {
  if (deepth === s.length) result.push(path);
  for (let i = deepth; i < s.length; i += 1) {
    if (isPalindrome(s, deepth, i)) {
      dfs(s, i + 1, [...path, s.substring(deepth, i + 1)], result);
    }
  }
};

console.log(partition('aab'));
