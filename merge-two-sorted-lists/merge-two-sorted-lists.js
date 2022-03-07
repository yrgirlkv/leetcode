/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists = function (list1, list2) {
  let head = list1.val < list2.val ? list1 : list2;
  return head;
};

module.exports = {
  mergeTwoLists: mergeTwoLists,
  sampleList1: { val: 1, next: { val: 2, next: { val: 4, next: null } } },
  sampleList2: { val: 1, next: { val: 3, next: { val: 4, next: null } } },
};
