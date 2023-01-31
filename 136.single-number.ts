/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  nums.sort((a, b) => { return a - b })
  if (nums[0] != nums[1]) return nums[0]
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      i++
      continue
    }
    if (nums[i - 1] != nums[i] && nums[i] != nums[i + 1]) return nums[i]
  }
  return nums[nums.length - 1]
};
// @lc code=end

