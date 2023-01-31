/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let buy = prices[0]
  let sell = prices[0]
  let profit = 0
  for (let day = 1; day < prices.length; day++) {
    if (sell < prices[day]) {
      sell = prices[day]
      profit = Math.max(profit, sell - buy)
      continue
    }
    if (buy > prices[day]) {
      buy = prices[day]
      sell = prices[day]
      profit = Math.max(profit, sell - buy)
      continue
    }
  }
  return profit
};
// @lc code=end

