/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let i:number = 0 
  while (i < nums.length) {
    if (nums[i] != val) i++
    else nums.splice(i,1)
  }  
  return nums.length
};
// @lc code=end

