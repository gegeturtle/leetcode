/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let result: string = strs[0]
  for (let i = 1; i < strs.length; i++) {
    result = compare(result, strs[i])
    if (result == "") {
      break
    }
  }

  return result
};

function compare(a: string, b: string): string {
  let result: string = ""
  for (let i = 0; i < (Math.min(a.length, b.length)); i++) {
    if (a[i] != b[i]) break
    result = `${result}${a[i]}`
  }
  return result
}
// @lc code=end

