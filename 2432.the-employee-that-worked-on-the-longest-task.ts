/*
 * @lc app=leetcode id=2432 lang=typescript
 *
 * [2432] The Employee That Worked on the Longest Task
 */

// @lc code=start
function hardestWorker(n: number, logs: number[][]): number {
  let hardest = logs[0]
  for (let i = 1; i < logs.length; i++) {
    if (hardest[1] <= (logs[i][1] - logs[i - 1][1])) {
      if (hardest[1] == (logs[i][1] - logs[i - 1][1])) hardest[0] = Math.min(logs[i][0], hardest[0])
      else hardest[0] = logs[i][0]
      hardest[1] = logs[i][1] - logs[i - 1][1]
    }

  }
  return hardest[0]
};
// @lc code=end

