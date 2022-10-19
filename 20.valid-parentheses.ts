/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s.length % 2) return false
  while (s.length > 1) {
    if (!s.match(/\(\)|\{\}|\[\]/)) return false
    s = s.replace(/\(\)|\{\}|\[\]/, "")
  }
  return s.length == 0
};
// @lc code=end

