/**
 * 解题思路： 获取数组中的最大值及最小值字符串，最小字符串与最大字符串的最长公共前缀也为其他字符串的公共前缀，即为字符串数组的最长公共前缀
 * @param {最长公共前缀} strs
 */
var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let min = 0,
    max = 0;
  for (let i = 1; i < strs.length; i++) {
    if (strs[min] > strs[i]) min = i;
    if (strs[max] < strs[i]) max = i;
  }
  for (let j = 0; j < strs[min].length; j++) {
    if (strs[min].charAt(j) !== strs[max].charAt(j)) {
      return strs[min].substring(0, j);
    }
  }
  return strs[min];
};

const arr = ["abc", "abcd", "ab", "ab"];
console.log("a" < "c"); //true

/**
 * 分而治之，也就是分解成两两字符串公共前缀，
 * 空间复杂度 O(mlogn) n是数组的长度，m为字符串数组中最长字符的长度
 * 时间复杂度 O(s)  s 是所有字符串中字符数量的总和
 *
 */
function lcPrefixRec(arr) {
  let n = arr.length;
  if (n == 1) return arr[0]; //返回的是一个字符串
  // 先拆解
  let mid = Math.floor(n / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  const left_str = lcPrefixRec(left); //递归拆分，直到拆分到一个元素
  const right_str = lcPrefixRec(right);
  let j = 0;
  for (; j < left_str.length; j++) {
    if (left_str.charAt(j) !== right_str.charAt(j)) {
      break;
    }
  }
  return left_str.substring(0, j);
}

console.log(lcPrefixRec(arr));
