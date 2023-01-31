/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  if (a == "0") return b
  if (b == "0") return a
  let arrA: string[] = a.split("").reverse()
  let arrB: string[] = b.split("").reverse()
  let store: number = 0
  let result: string = ""
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    let buffer: number = store
    if (arrA[i] == "1") buffer++
    if (arrB[i] == "1") buffer++
    if (buffer % 2 == 0) result = `0${result}`
    else result = `1${result}`
    if (buffer > 1) store = 1
    else store = 0
  }
  if (store>0) result = `1${result}`
  return result
};
// @lc code=end

