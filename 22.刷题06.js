/**
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次
 *
 * 1->2->2
 *  1->2
 *
 * 1->1->2->3->3
 * 1->2->3
 */

const head = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: null,
        },
      },
    },
  },
};

var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let j = head.next,
    cur = head;
  while (j) {
    if (cur.val != j.val) {
      cur.next = j;
      cur = j;
    }
    j = j.next;
  }
  cur.next = null;
  return head;
};

console.log(deleteDuplicates(head));

function deleteDuplicates1(head) {
  if (!head || !head.next) return head;
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      // 如果当前这个元素和下一个相等，斩断中间这个元素往下走
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}

/**
 * 合并两个有序数组
 *   给你两个有序整数数组num1和num2,将num2合并到num1中，使num1成为一个有序数组
 * 说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 思路：1 先合并再排序(暴力)
 *       2 指针，
 */

function mergeArray(num1, num2) {
  num1 = [...num1, ...num2];
  return num1.sort((a, b) => a - b);
}
var merge = function (nums1, m, nums2, n) {
  let length = m + n;
  while (n > 0) {
    if (m <= 0) {
      nums1[--length] = nums2[--n];
      continue;
    }
    nums1[--length] = nums1[m - 1] >= nums2[n - 1] ? nums1[--m] : nums2[--n];
  }
};
// 三指针
function mergeArray1(num1, m, num2, n) {
  // 由于num1空间足够
  let index1 = m - 1,
    index2 = n - 1,
    index3 = m + n - 1;
  // 由于是有序数组，最后一个一定是数组中最大的那个，所以比较两个数组中最后一个值的大小放到最后位只，index3左移，比较大的那个左移
  while (index2 >= 0) {
    if (num1[index1] < num2[index2]) {
      num1[index3] = num2[index2];
      index2--;
    } else {
      num1[index3] = num1[index1];
      index1--;
    }
    index3--;
  }
  return num1;
}

/**
 * 给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 */

//  可以利用这种递归思想并发同时爬两棵树  有点强
var isSameTree = function (p, q) {
  function traversal(root1, root2) {
    if (root1 === null && root2 !== null) {
      return false;
    } else if (root1 !== null && root2 === null) {
      return false;
    } else if (root1 === null && root2 === null) {
      return true;
    } else {
      return (
        root1.val === root2.val &&
        traversal(root1.left, root2.left) &&
        traversal(root1.right, root2.right)
      );
    }
  }
  return traversal(p, q);
};

/**
 * 给定一个二叉树，检查它是否镜像对称
 *
 */

var isSymmetric1 = function (root) {
  const check = (left, right) => {
    // 参数接收左右子树
    if (!left && !right) return true; // 左右子树都不存在 也是对称的
    if (left && right) {
      // 左右子树都存在，要继续判断
      return (
        left.val === right.val && // 左右子树的顶点值要相等
        check(left.left, right.right) && // 左子树的left和右子树的right相等
        check(left.right, right.left)
      ); // 左子树的right和右子树的left相等
    }
    return false; // 左右子树中的一个不存在，一个存在，不是对称的
  };
  return !root || check(root.left, root.right); // root为null也是对称的
  // 不满足则调用check判断左右子树
};

var isSymmetric2 = (root) => {
  if (!root) return true;
  let queue = [root.left, root.right];
  while (queue.length) {
    // 队列为空代表没有可入列的节点，遍历结束
    let len = queue.length; // 获取当前层的节点数
    for (let i = 0; i < len; i += 2) {
      // 一次循环出列两个，所以每次+2
      let left = queue.shift(); // 左右子树分别出列
      let right = queue.shift(); // 分别赋给left和right变量
      if ((left && !right) || (!left && right)) return false; // 不满足对称
      if (left && right) {
        // 左右子树都存在
        if (left.val !== right.val) return false; // 左右子树的根节点值不同
        queue.push(left.left, right.right); // 让左子树的left和右子树的right入列
        queue.push(left.right, right.left); // 让左子树的right和右子树的left入列
      }
    }
  }
  return true; // 循环结束也没有遇到返回false
};

// 栈模拟递归
var isSymmetric3 = (root) => {
  if (!root) return true;
  let leftStack = [],
    rightStack = []; // 维护两个栈
  let curLeft = root.left; // 当前的左子树
  let curRight = root.right; // 当前的右子树
  while (curLeft || curRight || leftStack.length || rightStack.length) {
    while (curLeft) {
      // 左子树存在
      leftStack.push(curLeft); // 推入leftStack栈
      curLeft = curLeft.left; // 不断将左子树入栈
    }
    while (curRight) {
      // 右子树存在
      rightStack.push(curRight); // 推入rightStack栈
      curRight = curRight.right; // 不断将右子树压入栈
    }
    if (leftStack.length !== rightStack.length) return false;
    // 栈的高度不相等，说明结构不对称
    curLeft = leftStack.pop(); // 栈顶节点出栈，赋给curLeft
    curRight = rightStack.pop(); // 栈顶节点出栈，赋给curRight
    if (curLeft.val !== curRight.val) return false;
    // 两个栈出栈的节点值不相等 不对称
    curLeft = curLeft.right; // 考察左子树的right
    curRight = curRight.left; // 考察右子树的left
  }
  return true;
};
