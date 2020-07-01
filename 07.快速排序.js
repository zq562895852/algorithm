/**
 *
 * @param {快速排序} list
 *
 * 思路：
 *   双指针，一个指针从前走，一个从后走，取第一个数，查找第一个数应该放的位置，如果比这个数大就放到右边，比这个值小就放到左边，当两个指针重合是就是当前值的位置
 * 当从第一个找到位置开始，对这个位置的左边进行递归，右边进行递归，典型的空间换时间
 *
 * 时间复杂度 nlogn
 */
function quick_sort(list, first, last) {
  if (first >= last) return;
  if (Array.isArray(list)) {
    // mid_value   low左指针，high右指针
    let mid_value = list[first],
      low = first,
      high = last;
    while (low < high) {
      // 右指针向左移动 如果比mid_value大则继续，否则和low交换，然后左指针向右移动如果比mid_value小继续，否则和high交换，右指针继续移动
      while (low < high && list[high] > mid_value) {
        high--;
      }
      //    当上面循环退出时说明list[high]大于mid_value 进行交换
      list[low] = list[high];
      //    此时应该左指针移动

      while (low < high && list[low] < mid_value) {
        low++;
      }
      //   当退出循环的时候说明前面的值比mid_value大，和high进行交换
      list[high] = list[low];
    }
    list[low] = mid_value;

    // 对low左边递归
    quick_sort(list, first, low - 1);
    // 对low右边递归
    quick_sort(list, low + 1, last);
  }
}

const arr = [14, 4, 8, 90, 89, 22, 34, 56];
quick_sort(arr, 0, arr.length - 1);
console.log(arr);
