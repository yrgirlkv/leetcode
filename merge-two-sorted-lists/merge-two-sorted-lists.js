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
  let [head, second] =
    list1?.val < list2?.val ? [list1, list2] : [list2, list1];
  let chain = { val: head?.val, next: null };
  chain.next = mergeTwoLists(second, head?.next);
  return head;
};

const linkedListArray = (list) => {
  if (list.next === null) {
    return [list.val];
  } else {
    return [list.val, ...linkedListArray(list.next)];
  }
};

module.exports = {
  mergeTwoLists: mergeTwoLists,
  sampleList1: { val: 1, next: { val: 2, next: { val: 4, next: null } } },
  sampleList2: { val: 1, next: { val: 3, next: { val: 4, next: null } } },
  linkedListArray: linkedListArray,
};
