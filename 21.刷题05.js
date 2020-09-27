/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

思路： 1 阶    1  种方法
      2 阶   2
      3 阶   3  种
      4 阶   5    斐波那契数列
 */
// 使用动态规划
function climbStairs(n) {
  if (n == 1) return 1;
  let a = 1,
    b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}
console.log(climbStairs(5));

// 递归
function climbStairs2() {
  if (n == 1) return 1;
  if (n == 2) return 2;
  return climbStairs2(n - 1) + climbStairs(n - 2);
}
