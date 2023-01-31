/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  for (let index = digits.length-1; index >= 0; index--) {
    if (digits[index] == 9) {
      digits[index] = 0
      if (index == 0) digits.unshift(1)
      continue
    } else {
      digits[index]++
      break
    }
  }
  return digits
};
// @lc code=end

