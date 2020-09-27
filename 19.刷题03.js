/**
 * 实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

haystack = "hello", needle = "ll" //2
haystack = "aaaaa", needle = "bba"//-1
 */

var strStr = function (haystack, needle) {
  let fast = needle.length,
    slow = 0;
  //   <= 因为最后一个是取不到的，所以当fast到达haystack.length才能取完元素
  while (fast <= haystack.length) {
    console.log(haystack.substring(slow, fast));
    if (haystack.substring(slow, fast) === needle) {
      return slow;
    }
    fast++;
    slow++;
  }
  return -1;
};

console.log(strStr("a", ""));

/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置
   你可以假设数组中无重复元素
 * 思路：
     1. 二分查找 
     2. 双指针
 */
const arr = [1, 3, 4, 5];  //2
function searchInsert(nums, target) {
  let i = 0,
    j = nums.length - 1,
    n = nums.length;
  while (i <= j) {
    let mid = (i + j) >>> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  // 如果不存在就在i的位置
  return i;
}

// console.log(arr, 5);
console.log(searchInsert(arr, 5));

/**
 * 最后一个单词的长度：当字符尾部为空格的时候要找到第一个部位空格的元素，然后记录当前为止，再从当前为止向下查找到空格的位置
 *   'hello world  '
 */
function lengthOfLastWord(s) {
  let end = s.length - 1;
  while (end >= 0 && s.charAt(end) === " ") {
    end--;
  }
  if (end < 0) return 0;
  let start = end;
  while (start >= 0 && s.charAt(start) != " ") {
    start--;
  }
  return end - start;
}
