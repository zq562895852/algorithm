/**
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 * 输入: 4->2->1->3
   输出: 1->2->3->4

   输入: -1->5->3->4->0
   输出: -1->0->3->4->5
 */

/**
  * 外观数列：
  *   给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。

        注意：整数序列中的每一项将表示为一个字符串。

        「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：

        1.     1
        2.     11
        3.     21
        4.     1211
        5.     111221
        第一项是数字 1

        描述前一项，这个数是 1 即 “一个 1 ”，记作 11

        描述前一项，这个数是 11 即 “两个 1 ” ，记作 21

        描述前一项，这个数是 21 即 “一个 2 一个 1 ” ，记作 1211

        描述前一项，这个数是 1211 即 “一个 1 一个 2 两个 1 ” ，记作 111221
  */
// 正则不懂，正则有待加强
var countAndSay = function (n) {
  let prev = "1";
  for (let i = 1; i < n; i++) {
    prev = prev.replace(/(\d)\1*/g, (item) => `${item.length}${item[0]}`);
  }
  return prev;
};

var countAndSay = function (n) {
  if (n == 1) {
    return "1";
  }
  zh = (a) => {
    let m = 1;
    let res = "";
    for (let i = 0; i < a.length; i++) {
      if (a[i] == a[i + 1]) {
        m++;
      } else {
        res += m + a[i];
        m = 1;
      }
    }
    n--;
    return n == 1 ? res : zh(res);
  };
  return zh("1");
};

/**
 * 最大子序和：
 *   给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *  输入: [-2,1,-3,4,-1,2,1,-5,4],
    输出: 6
    解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

    如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 */

//  暴力方法

function maxSubArray(nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let temp = 0;
    for (let j = 0; j < nums.length; j++) {
      temp += nums[j];
      // 如果前几项的和大于max,更新max即可
      if (temp > max) max = temp;
    }
  }
  return max;
}
// 动态规划 不太懂
function maxSubArray2(nums) {
  if (!nums.length) {
    return;
  }
  // 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
  let max_ending_here = nums[0];
  let max_so_far = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // 以每个位置为终点的最大子数列 都是基于其前一位置的最大子数列计算得出,

    max_ending_here = Math.max(nums[i], max_ending_here + nums[i]);
    max_so_far = Math.max(max_so_far, max_ending_here);
  }

  return max_so_far;
}

/**
 * 
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

    最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

    你可以假设除了整数 0 之外，这个整数不会以零开头。

 */

var plusOne = function (digits) {
  // 数值比较小可以，数值超出安全范围就不行了
  return (Number(digits.join("")) + 1).toString().split("");
};
function plusOne2(digits) {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    digits[i]++;
    //    大于10取0，小于10取自身
    digits[i] = digits[i] % 10;
    //    如果digits[i] 没有进位，也就是余数不为0，直接加1返回即可
    if (digits[i] != 0) return digits;
  }
  // 如果前面没有返回说明都有进位，则在前面插入一个1即可
  digits.unshift(1);
  return digits;
}

console.log(plusOne2([9, 9, 9]));

/**
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。

   输入为 非空 字符串且只包含数字 1 和 0。
   列如：
    输入: a = "11", b = "1"
    输出: "100

    输入: a = "1010", b = "1011"
    输出: "10101"
 */
// var addBinary = function(a, b) {
//     return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
// };

const addBinary = (a, b) => {
  while (a.length > b.length) b = "0" + b;
  while (a.length < b.length) a = "0" + a; // 先对齐
  let res = new Array(a.length);
  let sum = 0;
  let carry = 0; // 进位
  for (let i = a.length - 1; i >= 0; i--) {
    sum = Number(a[i]) + Number(b[i]) + carry;
    if (sum >= 2) {
      res[i] = sum - 2;
      carry = 1;
    } else {
      res[i] = sum;
      carry = 0;
    }
  }
  if (carry) res.unshift(1); // 循环结束还要进1，则在res数组前端加一个1
  return res.join("");
};

/**
 * 实现 int sqrt(int x) 函数。

    计算并返回 x 的平方根，其中 x 是非负整数。

    由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
    示例 1:

        输入: 4
        输出: 2

    示例 2:

        输入: 8
        输出: 2
        说明: 8 的平方根是 2.82842..., 
             由于返回类型是整数，小数部分将被舍去。

*/
// k^2 <= x;k的平方
function mySqrt(x) {
  if (x < 2) return x;
  let left = 1,
    mid,
    right = Math.floor(x / 2);
  while (left <= right) {
    // 这是为何？？？
    mid = Math.floor(left + (right - left) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}
// 暴力
function sqrt(x) {
  var re = 0;
  while (!(re * re <= x && (re + 1) * (re + 1) > x)) {
    re++;
  }
  return re;
}

console.log(mySqrt(12));

/**
 * 算法的复杂度分析。
  排序算法，以及他们的区别和优化。
  数组中的双指针、滑动窗口思想。
  利用 Map 和 Set 处理查找表问题。
  链表的各种问题。
  利用递归和迭代法解决二叉树问题。
  栈、队列、DFS、BFS。
  回溯法、贪心算法、动态规划。
 */
