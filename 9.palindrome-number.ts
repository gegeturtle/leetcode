/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  return Array.from(x.toString()) == Array.from(x.toString()).reverse()
};
// @lc code=end

