/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let arr = s.split(" ")
  while (true) {
    if (arr[arr.length - 1] != "") break
    arr.pop()
  }

  return arr[arr.length-1].length
};
// @lc code=end

