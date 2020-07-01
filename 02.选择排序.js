/**
 *
 * @param {选择排序} list
 * 思路：
 *   1. 把数据分为两部分，从后面中选择一个最小值放到前面
 *   2. 以第一个为基准，就认为是最小值,循环从第二个元素开始也就是下标是1开始
 *   3. 第二次以 第二个为基准从后面的取最小值，和第二个进行交换，依次类推，直到n-1
 *   时间复杂度  O(n^2)  不稳定
 */
function selectSort(list) {
  if (Array.isArray(list)) {
    for (let j = 0; j < list.length - 1; j++) {
      let min = j;
      for (let i = j + 1; i < list.length; i++) {
        if (list[i] < list[min]) {
          min = i;
        }
      }
      // 当前值和前面的数据进行交换
      [list[j], list[min]] = [list[min], list[j]];
    }
  }
}

const arr = [23, 45, 67, 89, 21, 32, 43];
selectSort(arr);
console.log(arr);
