/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }


function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length == 0) return
  return new TreeNode(nums[Math.floor(nums.length / 2)], sortedArrayToBST(nums.slice(0, Math.floor(nums.length / 2))), sortedArrayToBST(nums.slice(1 + Math.floor(nums.length / 2))))
};
// @lc code=end

