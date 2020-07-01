/**
 * 二分查找
 *  要查询的数据必须是排过序的，是有序的顺序表
 *   根据二分查找的特点也就明白为什么是有序的顺序表，
 *
 */
/**
 *
 * @param {递归版本} list
 *
 * 最优复杂度 O(1) 最坏复杂度O(logn)
 */
function binary_search(list, item) {
  if (Array.isArray(list)) {
    const n = list.length;
    if (n > 0) {
      let mid = Math.floor(n / 2);
      if (list[mid] === item) {
        return true;
      } else if (list[mid] > item) {
        // 如果当前元素比mid位置的小，从左边查找
        return binary_search(list.slice(0, mid - 1), item);
      } else {
        //   如果当前元素比mid位置的大，从右边查找，这里一定要小心是mid+1,不然会爆栈，在最后一个元素的时候，由于是取的(n/2)向下取整，所以会从零截取到最后一个元素，进入死循环，如果是向上取整，则左查找同样的道理，所以一定是左查找-1，右查找+1，因为mid已经比较过，所以就过滤掉
        return binary_search(list.slice(mid + 1), item);
      }
    } else {
      return false;
    }
  }
}

/**
 * 非递归版本
 */
function binary_search2(list, item) {
  const n = list.length;
  let first = 0,
    last = n - 1;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (list[mid] === item) {
      return true;
    } else if (list[mid] > item) {
      // 左边查找,从mid位置的前一个元素开始，再分一半
      last = mid - 1;
    } else {
      // 右边查找，从mid位置的后一个元素开始，
      first = mid + 1;
    }
  }
}

const arr = [12, 3, 4, 5, 78, 90];

console.log(binary_search2(arr, 5));
console.log(binary_search(arr, 3));
console.log(binary_search(arr, 60));
