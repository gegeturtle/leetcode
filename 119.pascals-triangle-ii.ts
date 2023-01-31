/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  let result: number[] = [1]
  for (let i = 1; i < rowIndex + 1; i++) {
    let buffer = result
    for (let j = result.length - 1; j > 0; j--) {
      buffer[j] += result[j - 1]
    }
    buffer.push(1)
    result = buffer
  }
  return result
};
// @lc code=end

