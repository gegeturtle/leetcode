/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let index = 0; index < nums2.length; index++) {
    nums1[m+index] = nums2[index];
  }
  nums1.sort(function (x, y) { return x - y })
};
// @lc code=end

