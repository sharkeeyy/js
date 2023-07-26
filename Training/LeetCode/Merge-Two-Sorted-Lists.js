// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const five = new ListNode(5, null);
const four = new ListNode(4, null);
const three = new ListNode(3, five);
const two = new ListNode(2, four);
const one = new ListNode(1, three);

function mergeTwoLists(list1, list2) {
  let start = { val: 'start', next: null };
  let current = start;
  let first = list1;
  let second = list2;

  while (first && second) {
    if (first.val < second.val) {
      current.next = first;
      first = first.next;
    } else {
      current.next = second;
      second = second.next;
    }
    current = current.next;
  }

  current.next = first ?? second;

  return start.next;
}

console.log(mergeTwoLists(one, two));