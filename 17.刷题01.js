/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

     本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 */

class TreeNode {
  constructor(node) {
    this.ele = node;
    this.left = null;
    this.right = null;
  }
}

//x >>> 0  无符号移位运算符 本质上就是保证x有意义（为数字类型），且为正整数，在有效的数组范围内（0 ～ 0xFFFFFFFF），且在无意义的情况下缺省值为0。一个小小的表达式，隐藏着着多重的异常处理。js真是诡异啊。  会做数字转换，然后移位
// 数组是有序的，如果数组是无序的呢？又该怎么做？
const arr = [-20, -10, -3, 0, 5, 9, 10];
const sortedArrayToBST = nums => {
  const buildBST = (nums, start, end) => {
    if (start > end) return null;
    // >>>
    const mid = (start + end) >>> 1;
    const root = new TreeNode(nums[mid]);
    root.right = buildBST(nums, mid + 1, end);
    root.left = buildBST(nums, start, mid - 1);

    return root;
  };
  return buildBST(nums, 0, nums.length - 1);
};

console.log(sortedArrayToBST(arr));

// 其实都是分治思想，先把数组中间节点给到根节点，这样两边最多相差一个元素，分别把这两边的元素放到左边和右边即可
// var sortedArrayToBST = function(nums) {
//   if (!nums.length) return null;

//   let creatTree = (left, right) => {
//     if (left > right) return null;
//     let mid = Math.floor((left + right) / 2); // 向上向下取整都行 两种结果都通过
//     let root = new TreeNode(nums[mid]);
//     root.left = creatTree(left, mid - 1);
//     root.right = creatTree(mid + 1, right);
//     return root;
//   };

//   return creatTree(0, nums.length - 1);
// };

// 两数和
// var twoSum = function(nums, target) {
//   const n = nums.length;
//   for (let i = 0; i < n; i++) {
//     let index = nums.findIndex(e => e == target - nums[i]);
//     if (index > -1 && index != i) {
//       return [i, index];
//     }
//   }
//   return null;
// };

// 两数和不使用api
const twoSum = function(nums, target) {
  // 不使用api思路，存储一个对象，把val作为键，i 下标作为值，如果差值和对象中的值相等就返回他们的key和下标
  let map = new Object();
  for (let i = 0; i < nums.length; i++) {
    // map.set(nums[i], i);
    map[nums[i]] = i;
    console.log(map);
    console.log(target - nums[i]);
    if (target - nums[i] in map) {
      return [map[target - nums[i]], i];
    }
  }
  return null;
};
console.log(twoSum([2, 7, 11, 15], 9));

// 反转整数 123->321  120->21 -456->-654
// 注意： 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
function reverseInteger(num) {
  // 暴力方法 字符串反转
  let now = Math.abs(num)
    .toString()
    .split("")
    .reverse()
    .join("");
  // 判断正负数
  if (num < 0) {
    return now < Math.pow(2, 31) ? -now : 0;
  } else {
    return now < Math.pow(2, 31) ? now : 0;
  }
}
// 取余法，
var reverseInt = function(x) {
  let ord = Math.abs(x); //去符号
  let now = 0;
  while (ord > 0) {
    now = now * 10 + (ord % 10);
    ord = Math.floor(ord / 10);
  }
  if (x < 0) {
    return now <= Math.pow(2, 31) ? -now : 0;
  } else {
    return now < Math.pow(2, 31) ? now : 0;
  }
};

console.log(reverseInt(980));
/**
 * 罗马数字转整数
 *  I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000


 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。


 */

/**
 * 找到最长无重复子串
 * 思路一：
 *    维护一个数组，遍历字符串，判断字符是否在数组里，在先计算最大值，然后删除当前字符和之前的所有字符，往下遍历，循环结束就找出了最大值
 */
// 时间复杂度O(n^2) 空间复杂度O(n)
// function lengthOfLongestSubstring(s) {
//   const arr = [];
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     let index = arr.findIndex(e => e == s[i]);
//     if (index > -1) {
//       arr.splice(0, index);
//     }
//     arr.push(s.charAt(i));
//     max = Math.max(arr.length, max);
//   }
//   return max;
// }

// abcda abceab
var lengthOfLongestSubstring = function(s) {
  let map = new Map(),
    max = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i);
    }
    max = Math.max(max, j - i + 1);
    map.set(s[j], j);
  }
  return max;
};

var l = function(ss) {
  let obj = {},
    max = 0;
  let i, j;
  for (i = 0, j = 0; j < ss.length; j++) {
    if (obj[ss[j]] != undefined) {
      // "abba"  当把第二个b找出时，把第二个的索引给了i，开始下一个的时候obj[a] = 0,此时i=2,所以不能直接赋值i,要取最大值这样才会保证i值不会往回走
      i = Math.max(obj[ss[j]] + 1, i);
    }
    obj[ss[j]] = j;
    max = Math.max(max, j - i + 1);
  }
  return max;
};

console.log(l("abcabc"));
