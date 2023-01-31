/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true
  if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) return false
  return isBalanced(root.left) && isBalanced(root.right)
};
function maxDepth(root: TreeNode | null, n? : number): number {
  if (root === null) return 0
  if (n === undefined) n = 0
  n++
  return Math.max(n,maxDepth(root.left,n),maxDepth(root.right,n))
};
// @lc code=end

