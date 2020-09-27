/**
 *  判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数
 *  思路：正读和倒读都是一样的，第一种数组反转，第二种双指针一个从头一个从尾
 *
 *  进阶：能不能不将整数转为字符串来解决吗？？
 */

const a = 1221;
//直接字符串反转
function reverseInter(n) {
  return n.toString().split("").reverse().join("") == n;
}
console.log(reverseInter(-a));
// 双指针方法
function reverseInt(s) {
  // 切记这是整数所以要转换成字符串才能操作
  s = s.toString();
  const n = s.length;
  let j = n - 1,
    i = 0;
  while (i < j) {
    if (s.charAt(i) == s.charAt(j)) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(reverseInt(1211));

/**
 * 不转成字符串的解法
 * 分析：如果是负数，则一定不是回文直接返回，如果是整数则计算倒续数值计算出来和原值比较，关键是如何求倒序数值
 *    一个整数对10求余总是返回个位数，所以首先对10求余，然后除以10继续求余依次类推，
 * */
// 数学计算执行速度要快不少
function isPalindrome(x) {
  // 首先判断是否是负数
  if (x < 0) return false;
  let cur = 0,
    num = x;
  while (num != 0) {
    cur = cur * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return cur === x;
}

/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 思路：双指针法，每个链表都有一个指针，拿出来进行比较，小的放到一个数组中，然后小的那个指针往后走，当遇到大的交替往后走，最后合并余下的
 * */

//双指针方法
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function mergeTwoList(l1, l2) {
  // 最后只需要返回head的next即可
  let head = new ListNode(0);
  let prevNode = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prevNode.next = l1;
      l1 = l1.next;
    } else {
      prevNode.next = l2;
      l2 = l2.next;
    }
    prevNode = prevNode.next;
  }
  //  合并剩下的节点
  prevNode.next = l1 ? l1 : l2;
  return head.next;
}

// 时间复杂度：O(n)(n为l1和l2的每个元素的遍历次数和)
// 空间复杂度：O(n)(n为l1和l2的空间和)
// 编程技巧：递归 + 原地斩链相连
// 递归比较查看两个链表哪个元素先小 就斩断此元素位置链条⛓️连接到另一链表上 如此也不需要另外开辟存储空间
// 斩断后 重连铁链的动作因为要自动非人工 所以需要程序自己调用自己 即为递归
// 斩断后需要连的结点 通过 return 最小结点 即动态更新 斩断结点位置
// 随时连接下一个符合要求的位置（x.next = 求下一个需要连接的结点位置(即程序自动搜索即递归) && x = 下一个需要连接的结点位置）
// 返回修改后的 l1头结点的链表 或 l2头结点的链表

// 递归方法 其实和双指针有点类似，就是谁小递归谁，交替递归
function mergeTwoLists(l1, l2) {
  if (!l1) return l2; //递归终点，谁有剩余链接谁
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
}

/**
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成
 */

//  这种只能每次删除一个重复项
function removeDuplicates(nums) {
  let i = nums.length - 1;
  while (i > 0) {
    // 当删除一个重复元素时，i还是指向了当前值，因为数组减一了，所以i--还是指向了当前元素，这样保证可以判断右对个重复，但是只能一次删除一个，如果有多个连续的重复效率就不高了
    if (nums[i] == nums[i - 1]) {
      nums.splice(i - 1, 1);
    }
    i--;
  }
  return nums.length;
}
// 双指针->快慢指针
// 数组完成排序后，我们可以放置两个指针 i 和 j，其中 i 是慢指针，而 j 是快指针。只要 nums[i] = nums[j]，我们就增加 j 以跳过重复项。当我们遇到 nums[j] !=nums[i] 时，跳过重复项的运行已经结束，因此我们必须把它（nums[j]）的值复制到 nums[i + 1]然后递增 i，接着我们将再次重复相同的过程，直到 j 到达数组的末尾为止

function removeDuplicatess(nums) {
  // 可以放两个指针，如果有重复跳过，
  let i = 0,
    j = 1;
  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
    j++;
  }
  return i + 1;
}

/**
 *给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */

var removeElement = function (nums, val) {
  let index = nums.findIndex((n) => n == val);
  if (index < 0) return;
  nums.splice(index, 1);
  removeElement(nums, val);
  return nums.length;
  // while (index > -1) {
  //   nums.splice(index, 1);
  //   index = nums.findIndex((n) => n == val);
  // }
  // return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));

function removeEle(nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
}
