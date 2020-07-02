/**
 * 1.编写一个程序，找到两个单链表相交的起始节点
 *   要求：
 *      如果两个链表没有交点，返回 null.
        在返回结果后，两个链表仍须保持原有的结构。
        可假定整个链表结构中没有循环。
        程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 *   思路1(不符合O(1)暴力)：两次遍历，第一次遍历给每个元素加一个标志位，第二次遍历另一个，当第一个出现标志位的时候就是要找的节点
 *   思路2：双指针消差法，两个指针同时走，当短的链表走到尾，长链表指针和短链表指针之间的差刚好是链表的长度差，此时短链指针指向长链表头部，当长链表指针走到尾部时，此时短链表也走过了两个链表相差的部分，让长链表指针指向短链表头部，往下遍历，当有元素相同时就是要找的元素
 */

//  双指针消除长度差  时间复杂度O(n) 空间复杂度 O(1)
var getIntersectionNode = function(headA, headB) {
  // 清除高度差
  let pA = headA,
    pB = headB;
  while (pA || pB) {
    if (pA === pB) return pA;
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return null;
};

/**
 * 删除链表倒数第n个元素
 * 思路：快慢双指针， 快指针先走，n--,当n走到0时，此时慢指针在头部，两个指针刚好相差n个元素，如果此时快指针在尾部，慢指针就是倒数第n个元素，但是我们要找到倒数第n个元素的上一个，让他的next指针指向next.next才能删除这个元素，所以快指针向后再走一步即可
 */

//  空间复杂度 O(1) 时间复杂度O(n)
function removeNode(head, n) {
  const fast = head,
    slow = head;
  while (fast.next) {
    if (n < 0) {
      slow = slow.next;
    }
    fast = fast.next;
    n--;
  }
  //   如果慢指针没有动就是head，要删除的就是head节点，直接返回head.next即可
  if (slow == head) return head.next;
  slow.next = slow.next.next;
  return head;
}

/**
 * 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
   如果有两个中间结点，则返回第二个中间结点。
 */
function searchMidNode(head) {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

/**
 *❞
题目描述
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点  (i, ai) 。在坐标内画 n 条垂直线，垂直线 i  的两个端点分别为  (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与  x  轴共同构成的容器可以容纳最多的水。
 其实就是面积最大，双指针动态滑窗
 */

function maxArea(arr) {
  let max = 0,
    i = 0,
    j = arr.length - 1;
  while (i < j) {
    let minHeight = Math.max(arr[i], arr[j]);
    max = (j - i) * minHeight;
    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
}
// 判断有效括号
var isValid = function(s) {
  let map = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  let stack = [];
  let len = s.length;
  if (len % 2 !== 0) return false;
  for (let i of s) {
    // in 判断属性是否在
    if (i in map) {
      stack.push(i);
    } else {
      if (i !== map[stack.pop()]) return false;
    }
  }
  console.log(stack);
  return !stack.length;
};

isValid("[()]");

/**
 *题目描述
    给定一个数组 nums，有一个大小为  k  的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k  个数字。滑动窗口每次只向右移动一位。

    返回滑动窗口中的最大值。

    进阶：你能在线性时间复杂度内解决此题吗？
 */
//暴力求解  遍历  Number.MIN_SAFE_INTEGER;
var maxSlidingWindow = function(nums, k) {
  let len = nums.length;
  if (len === 0) return [];
  if (k === 1) return nums;
  let resArr = [];
  for (let i = 0; i <= len - k; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }
    resArr.push(max);
  }
  return resArr;
};
// 双端对列，没看懂，
var maxSlidingWindow = function(nums, k) {
  // 缓存数组的长度
  const len = nums.length;
  const res = [];
  const deque = [];
  for (let i = 0; i < len; i++) {
    // 队尾元素小于当前元素
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);

    // 当队头元素的索引已经被排除在滑动窗口之外时
    while (deque.length && deque[0] <= i - k) {
      // 队头元素出对
      deque.shift();
    }
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  return res;
};
