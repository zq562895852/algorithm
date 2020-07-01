/**
 * 二叉堆是一种特殊的堆，二叉堆是完全二元树（二叉树）或者是近似完全二元树（二叉树）。二叉堆有两种：最大堆和最小堆。最大堆：父结点的键值总是大于或等于任何一个子节点的键值；最小堆：父结点的键值总是小于或等于任何一个子节点的键
 */

//  最大堆 实现思路：插入节点，如果当前节点比父节点大，和父节点交换位置，直到符合最大堆的定义

class MaxHeap {
  constructor(capacity) {
    this.data = [,];
    this.count = 0;
  }

  add(node) {
    this.data.push(node);
    this.shiftUp();
    console.log(this.data);
  }
  shiftUp() {
    let k = this.data.length - 1;
    let mid = Math.floor(k / 2);

    //   mid折半是父级，也就是和父节点进行比较，如果比父节点大，则进行交换
    while (mid > 0 && this.data[k] > this.data[mid]) {
      //   进行交换
      [this.data[k], this.data[mid]] = [this.data[mid], this.data[k]];
      // 然后k 取父节点的位置，再次进行比较
      k = mid;
      mid = Math.floor(mid / 2);
    }
  }
  //   shiftUp() {
  //     let k = 1;
  //     while (k < this.data.length) {
  //       k++;
  //       while (
  //         Math.floor(k / 2) > 0 &&
  //         this.data[Math.floor(k / 2)] < this.data[k]
  //       ) {
  //         [this.data[Math.floor(k / 2)], this.data[k]] = [
  //           this.data[k],
  //           this.data[Math.floor(k / 2)]
  //         ];
  //         k = Math.floor(k / 2);
  //       }
  //     }
  //   }
}

const h = new MaxHeap(100);

h.add(1);
h.add(2);
h.add(3);
h.add(4);
h.add(5);
h.add(6);
h.add(8);

// [empty, 8, 4, 6, 1, 3, 2, 5]

// 原地建堆  最小堆
function buildHeap(items, heapSize) {
  while (heapSize < items.length - 1) {
    heapSize++;
    let i = heapSize;
    while (Math.floor(i / 2) > 0 && items[i] < items[Math.floor(i / 2)]) {
      swap(items, i, Math.floor(i / 2)); // 交换
      i = Math.floor(i / 2);
    }
  }
}

function swap(items, i, j) {
  let temp = items[i];
  items[i] = items[j];
  items[j] = temp;
}

// 测试
// var items = [, 5, 2, 3, 4, 1];
const items = [, 1, 2, 3, 4, 5, 6, 8];
// 初始有效序列长度为 1
buildHeap(items, 1);
// console.log(items);
// [empty, 1, 2, 3, 5, 4]

/**
 * topK问题
 *
 * 找出前k大的数
 *  从数组中取前 K 个数，构造一个小顶堆
    从 K+1 位开始遍历数组，每一个数据都和小顶堆的堆顶元素进行比较，如果小于堆顶元素，则不做任何处理，继续遍历下一元素；如果大于堆顶元素，则将这个元素替换掉堆顶元素，然后再堆化成一个小顶堆。
    遍历完成后，堆中的数据就是前 K 大的数据
    遍历数组需要 O(N) 的时间复杂度，一次堆化需要 O(logK) 时间复杂度，所以利用堆求 Top K 问题的时间复杂度为 O(NlogK)。
  中位数问题
    维护两个堆，n%2 === 0 中位数两个中间元素
    这里需要维护两个堆：
    这里的元素应该是有序的
    大顶堆：用来存取前 n/2 个小元素，如果 n 为奇数，则用来存取前 Math.floor(n/2) + 1 个元素
    小顶堆：用来存取后 n/2 个小元素

    那么，中位数就为：

    n 为奇数：中位数是大顶堆的堆顶元素
    n 为偶数：中位数是大顶堆的堆顶元素与小顶堆的堆顶元素

 */
