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
  //figure out how to make it stop and you're golden
  let head, tail;
  if (list1?.val < list2?.val) {
    head = list1;
    tail = list2;
  } else if (list1?.val >= list2?.val || !list2.next) {
    head = list2;
    tail = list1;
  }
  console.log('head.next', head.next, 'tail', tail);
  if (head.next === null) {
    return tail;
  } else {
    head.next = mergeTwoLists(head.next, tail);
    return head;
  }
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
