/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  let result: number[][] = []
  for (let i = 0; i < numRows; i++) {
    result.push([])
    result[i].push(1)
    result[i][i] = 1
    for (let j = 1; j < i; j++){
      result[i][j] = result [i-1][j] + result[i-1][j-1]
    }
  }
  return result
};
// @lc code=end

