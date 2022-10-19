/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2
  if (list2 === null) return list1
  let result: ListNode
  if (list1.val <= list2.val) {
      result = new ListNode(list1.val)
      list1 = list1.next
  } else {
      result = new ListNode(list2.val)
      list2 = list2.next
  }
  let buffer = result
  while (list1 != null && list2 != null) {
      if (list1.val <= list2.val) {
          buffer.next = new ListNode(list1.val)
          buffer = buffer.next
          list1 = list1.next
      } else {
          buffer.next = new ListNode(list2.val)
          buffer = buffer.next
          list2 = list2.next
      }
  }
  buffer.next = list1
  while (buffer.next!=null) buffer = buffer.next
  buffer.next = list2
  return result
};
// @lc code=end

