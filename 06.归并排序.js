/**
 *
 * @param {归并排序} list
 * 先拆分数组，直到拆成单个元素，再进行排序合并，
 * 先拆分，递归拆分左右两个子数组，到最后拆分成单个元素直接返回，接收递归的返回值，对左右新的返回值(数组)进行循环遍历，找最小的值放入新数组，然后把这个数组返回即可
 *
 * O(nlogn)
 */
function merge_sort(list) {
  if (list.length == 1) {
    return list;
  }
  const mid = Math.floor(list.length / 2);
  //   拆分数组
  let left_result = merge_sort(list.slice(0, mid));
  let right_result = merge_sort(list.slice(mid, list.length));
  //   合并数组
  let left_pointor = 0,
    right_pointor = 0,
    result = [];
  while (
    left_pointor < left_result.length &&
    right_pointor < right_result.length
  ) {
    if (left_result[left_pointor] < right_result[right_pointor]) {
      result.push(left_result[left_pointor]);
      left_pointor++;
    } else {
      result.push(right_result[right_pointor]);
      right_pointor++;
    }
  }
  //   把最后单个的合并进来
  result = [...result, ...left_result.slice(left_pointor)];
  result = [...result, ...right_result.slice(right_pointor)];

  return result;
}

const arr = [14, 4, 8, 90, 89, 22, 34];
const newArr = merge_sort(arr);
console.log(newArr);
