// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const one = new ListNode(1, null);
const two = new ListNode(2, null);
const three = new ListNode(3, null);
const four = new ListNode(4, null);
const five = new ListNode(5, null);

one.next = two;
two.next = three;
three.next = four;
four.next = five;


function reorderList(head) {
  let start = new ListNode('start', null);
  let current = head;
  const hash = new Map();
  let left = head;
  let right;

  if (!head.next) {
    return head;
  }

  while (current) {
    if (current.next) {
      right = current.next;
      hash.set(current.next, current);
    }
    current = current.next;
  }

  current = start;
  let i = 0;

  while (left !== right) {
    if (i % 2 === 0) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = hash.get(right);
    }
    
    current = current.next;
    i++;
  }

  current.next = left;
  current = current.next;
  current.next = null;

  // current = start;
  // while (current) {
  //   console.log(current.val);
  //   current = current.next;
  // }

  return start.next;
}

console.log(reorderList(one));