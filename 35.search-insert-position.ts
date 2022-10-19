/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let i: number = 1
  if (target < nums[0]) return 0
  if (target > nums[nums.length-1]) return nums.length
  while (i < nums.length) {
    console.log[i]
    if (target > nums[i - 1] && target <= nums[i]) return i
    i++
  }
  return 0
};
// @lc code=end

