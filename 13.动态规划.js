/**
    递归能解决的问题，动态规划一定能解决

    动态规划：
       1  不会产生后效性
       2  重叠子问题，空间换时间
    套路：
       离散的，最优子结构，n-1 可以推导出n
       背包问题，
 */
const climbStairs = function (n) {
  let a1 = 1;
  let a2 = 1;
  for (let i = 2; i <= n; i++) {
    [a1, a2] = [a2, a1 + a2];
  }
  return a2;
};

[1, 1, 2, 3, 5, 8, 13];
// 斐波那契数列
console.log(climbStairs(6));

/**
 * 解题步骤：
 *   设计暴力算法，找到冗余
 *    设计并存储状态
 *    递归式(状态转移方程)
 *     自底向上计算最优解
 */

//  n! 用动态规划

function fn(n) {
  if (n == 1) return 1;
  return n * fn(n - 1);
}

// f(n) = n * f(n - 1);
// 动态规划
function fn1(n) {
  if (n == 1) return 1;
  let arr = [];
  arr[0] = 1;
  for (let i = 1; i <= n; i++) {
    arr[i] = i * arr[i - 1];
  }
  return arr[arr.length - 1];
}

console.log(fn1(2));

/**
 * N*M的棋盘上，小兵要从左下角走到右上角，只能向上或者向右，问有多少种走法
 */

function f(n, m) {}

/**
 * 背包问题：
 *   小偷有一个容量为W的背包，有n件物品，第i个物品价值vi,且重wi
 *   目标：找到xi使得对于所有的xi={0,1} 要么选1，要么不选0
 *   sum(wi*vi) <= W,并且sum(xi*vi) 最大
 */
// w[n]  v[n] W

function search(idx, S) {
  // 首先S不能大于W
  if (S > w) {
    return 0;
  }
}
