/**
 * 题目1：给定一个整数数组nums和一个目标值target,请你在该数组中找出和为目标值的那两个整数，并返回他们数组的下标，你可以假设每种输入只会对应一个答案，但是数组中同一个元素不能使用两边
 */

function getIndex(nums = [], target) {
  if (nums.length == 0) return;
  let i = nums.length;
  while (i > 1) {
    const last = nums.pop();
    //  如果有就返回，没有就继续往下找，当没有的时候也就是当前这个数据在数组中没有可组合的等于目标的值，所以直接删除不影响查找结果
    if (nums.indexOf(target - last) > -1) {
      return [nums.indexOf(target - last), nums.length];
    }
    i--;
  }
}
