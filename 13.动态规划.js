const climbStairs = function(n) {
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
