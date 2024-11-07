// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const one = new ListNode(1, null);
const two = new ListNode(2, null);
const three = new ListNode(3, null);
const four = new ListNode(4, null);
const five = new ListNode(5, null);

one.next = five;
two.next = three;
three.next = four;
four.next = one;

function hasCycle(head) {
  const set = new Set();
  let current = head;

  while (current) {
    if (set.has(current)) {
      return true;
    } else {
      set.add(current);
      current = current.next;
    }
  }

  return false;
}

console.log(hasCycle(one));
