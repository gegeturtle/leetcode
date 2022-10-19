/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
let roman: { [key: string]: number } = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
}

function romanToInt(s: string): number {
  let group = 0
  let pre = 0
  let total = 0
  for (let i = 0; i < s.length; i++) {
    // s.split("").forEach(a => {
    if (pre != 0) {
      if (pre < roman[s[i]]) {
        total += roman[s[i]] - group
        group = 0
      }
      if (pre > roman[s[i]]) {
        total += group
        group = roman[s[i]]
      }
    }
    if (pre == roman[s[i]] || pre == 0) group += roman[s[i]]
    pre = roman[s[i]]
  };
  return total + group
};
// @lc code=end

