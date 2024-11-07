// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const one = new ListNode(2, null);
const two = new ListNode(4, null);
const three = new ListNode(3, null);

one.next = two;
two.next = three;
three.next = null;

const _one = new ListNode(5, null);
const _two = new ListNode(6, null);
const _three = new ListNode(4, null);

_one.next = _two;
_two.next = _three;
_three.next = null;


function addTwoNumbers(l1, l2) {
  let start = new ListNode('start', null);
  let current = start;
  let rest = 0;

  let head1 = l1;
  let head2 = l2;

  while (head1 || head2 || rest) {
    const res1 = head1 ? head1.val : 0;
    const res2 = head2 ? head2.val : 0;
    const result = res1 + res2 + rest;
    
    const nextNode = new ListNode(0, null);

    rest = Math.floor(result / 10);
    nextNode.val = result % 10;

    current.next = nextNode;
    current = current.next;
     
    if (head1) head1 = head1.next;
    if (head2) head2 = head2.next;
  }

  return start.next;
}

console.log(addTwoNumbers(one, _one));