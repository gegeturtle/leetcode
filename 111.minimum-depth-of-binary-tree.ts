/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null, n? : number): number {
  if (root === null) return 0
  if (n === undefined) n = 0
  n++
  if (!root.left && !root.right) return n
  if (!root.right) return minDepth(root.left,n)
  if (!root.left) return minDepth(root.right,n)
  return Math.min(minDepth(root.left,n),minDepth(root.right,n))
};
// @lc code=end

