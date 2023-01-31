/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
  let minSlot: number = Math.ceil(n / 2) + ((n + 1) % 2)
  let result = 0
  for (let sample = 0; sample < minSlot; sample++) {
    let slot = n - sample
    result += (factorial(slot) / (factorial(sample) * factorial(slot - sample)))
  }
  return result
};
function factorial(n: number): number {
  if (n < 0) return -1
  if (n == 0) return 1
  else return n * factorial(n - 1)
}
// @lc code=end

