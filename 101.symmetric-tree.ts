/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

function isSymmetric(root: TreeNode | null): boolean {
  return isSameTree(root.left,root.right)
};
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q===null) return true
  if (p === null || q===null) return false
  return isSameTree(p.left,q.right) && p.val == q.val && isSameTree(p.right,q.left)
};
// @lc code=end

