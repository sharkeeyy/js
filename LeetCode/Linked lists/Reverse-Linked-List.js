/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const five = new ListNode(5, null);
const four = new ListNode(4, five);
const three = new ListNode(3, four);
const two = new ListNode(2, three);
const one = new ListNode(1, two);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
  let previous = null;
  let current = head;
  let next;
  while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
  }
  
  return previous;
};

console.log(reverseList(one));


