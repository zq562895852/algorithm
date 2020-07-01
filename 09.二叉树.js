/**
 * 树：
 *  每个节点有0个或多个子节点
 *  没有父节点的节点称为根节点
 *  每个非根节点有且只有一个父节点
 *  除了根节点外，每个子节点可以分为多个不相交的子树
 *
 *
 * 树的术语
 *   节点的度：子树的个数(几个子节点)称为该节点的度
 *   树的度：  一个树中最大的度(子树最多的那个)
 *   树的高度和深度：树种的节点最大深度(层)
 *
 * 无序树：没有顺序，自由树
 * 有序树：
 *    1.二叉树：完全二叉树（所有节点都是存在的）满二叉树（所有叶节点都在最底层）平衡二叉树（深度相差不能超过1）
 *    2.B树
 *    3.霍夫曼树
 *
 *
 *
 *   二叉排序树(二叉查找树)：该节点的右边比该节点大，左边比该节点小
 *
 *
 * 树的存储：
 *   通常以链式存储
 */

class Node {
  constructor(item) {
    this.ele = item;
    //左孩子
    this.leftChild = null;
    //   右节点
    this.rightChild = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    // 节点队列
    this.queue = [this.root];
  }
  add(item) {
    const node = new Node(item);
    if (!this.root) {
      this.root = node;
      return;
    }
    //   使用广度优先遍历(一层一层往下遍历)
    const queue = [this.root];
    // 首先判断根节点是不是空
    while (queue.length) {
      // 从队列头部取元素
      const cur_node = queue.shift();
      // 首先判断左子树是否存在，存在追加到队列中，不存在就赋值

      if (cur_node.leftChild) {
        queue.push(cur_node.leftChild);
      } else {
        cur_node.leftChild = node;
        return;
      }
      // 如果左子树存在，则判断右子树
      if (cur_node.rightChild) {
        queue.push(node);
      } else {
        cur_node.rightChild = node;
        return;
      }
    }
  }
  breadth_travel() {
    //   广度遍历和添加操作是一致的
    if (!this.root) return;
    const queue = [this.root];
    while (queue.length) {
      const cur_node = queue.shift();
      console.log(cur_node.ele);
      if (cur_node.leftChild) {
        queue.push(cur_node.leftChild);
      } else {
      }
      if (cur_node.rightChild) {
        queue.push(cur_node.rightChild);
      }
    }
  }
  //   前序遍历（先序遍历）
  preorder(node) {
    if (!node) return;
    console.log(node.ele);
    this.preorder(node.leftChild);
    this.preorder(node.rightChild);
  }
  // 前序遍历非递归版
  preorderTraver(root) {
    // 存放遍历结果
    const list = [];
    //  临时存储元素的栈
    const stack = [];
    //  首先从根节点访问
    if (root) stack.push(root);
    while (stack.length) {
      const cur_node = stack.pop(); //从尾部弹出
      list.push(cur_node.ele);
      //  先从右节点，因为栈是先进后出，这样下一次循环取出的是最后那个放入的,也就是后放入左节点
      if (cur_node.rightChild) {
        stack.push(cur_node.rightChild);
      }
      if (cur_node.leftChild) {
        stack.push(cur_node.leftChild);
      }
    }
    return list;
  }
  //   中序
  inorder(node) {
    if (!node) return;
    this.inorder(node.leftChild);
    console.log(node.ele);
    this.inorder(node.rightChild);
  }
  //  中序非递归版
  inorderTraver(root) {}
  //   后序
  postorder(node) {
    if (!node) return;
    this.postorder(node.leftChild);
    this.postorder(node.rightChild);
    console.log(node.ele);
  }
}

/**
 * 先序遍历：根->左->右
 * 中序遍历：左子树->根节点->右子树
 * 后续遍历：左子树->右子树->根节点
 */

const tree = new Tree();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
console.log(tree.root);
tree.breadth_travel();
