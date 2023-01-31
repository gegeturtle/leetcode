/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) return null
  let arrA = new Map<ListNode|null,number>()
  let arrB = new Map<ListNode|null,number>()
  let n = 0
  while (true) {
    if (!headA && !headB) break
    if (arrB.has(headA)) return headA
    if (headA) arrA.set(headA,n)
    if (arrA.has(headB)) return headB
    if (headA) arrB.set(headB,n)
    headA = headA?.next || null
    headB = headB?.next || null
    n++
  }
  return null
};
// @lc code=end

