/**
 *
 * @param {冒泡排序} list
 * 思路:
 *   首先内层循环是交换，每次循环保证一个元素顺序已经拍好
 *
 *     比如：[1, 3, 6, 9, 0, 8, 4]
 *     1次循环  [1,3,6,0,8,4,9]     最后一个元素已经排好
 *     2次循环  [1,3,0,6,4,8,9]     倒数第二个元素已经排好  依次类推，循环n-1即可完成排序，n-1次第一个元素就已经是排好序的，
 *   循环n-1次，第一次j取到n-1，因为比较的是j,j+1,所以取到n-1即可 此时 i = 0;
 *             第二次j取到n-2, 以为最后一个元素已经排好，所以j到达n-2即可 此时 i=1
 *             依次类推得到  j < n - i -1,即可完成排序
 *   O(n^2)   稳定
 *
 */
function bubbleSort(list) {
  if (Array.isArray(list)) {
    for (let i = 0, len = list.length; i < len - 1; i++) {
      let flag = false;
      for (let j = 0; j < len - i - 1; j++) {
        if (list[j] > list[j + 1]) {
          [list[j], list[j + 1]] = [list[j + 1], list[j]];
          flag = true;
        }
      }
      // 当不存在交换的时候就退出
      if (!flag) return;
    }
  }
}

const arr = [1, 3, 6, 9, 0, 8, 4];
bubbleSort(arr);
console.log(arr);
