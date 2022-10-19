/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let a = nums1.concat(nums2)
  a.sort(function (x, y) { return x - y })
  if (a.length % 2) return a[(a.length / 2) - 0.5]
  else return (a[a.length/2]+a[(a.length/2)-1])/2
};
// @lc code=end

