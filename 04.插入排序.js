/**
 *
 * @param {插入排序} list
 * 思路：
 *    认为前面的序列是有序，从后面拿一个元素和前面序列比较进行交换
 */

function insert_sort(list) {
  if (Array.isArray(list)) {
    for (let i = 1; i < list.length; i++) {
      let j = i;
      while (j) {
        if (list[j] < list[j - 1]) {
          [list[j], list[j - 1]] = [list[j - 1], list[j]];
          j--;
        } else {
          break;
        }
      }
    }
  }
}

const arr = [23, 33, 44, 55, 66, 11, 25, 90, 46];
insert_sort(arr);
console.log(arr);
