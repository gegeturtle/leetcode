/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const array : number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in array) return [array[nums[i]], i];
    array[target-nums[i]] = i;
  }
  return [];
};
// @lc code=end

