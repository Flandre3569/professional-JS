/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const deleteDuplicates = (head) => {
  // 极端情况，只有一个节点或者没有节点
  if (!head || !head.next) {
    return head;
  }

  // 开始使用dummy，使dummy永远指向头结点
  let dummy = new ListNode();
  dummy.next = head;

  // 使用游标进行遍历
  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      // 若重复，则进行记录
      let val = cur.next.val;
      // 因为重复的节点个数不一定，所以采用循环
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      // 不重复则正常遍历
      cur = cur.next;
    }
  }

  return dummy.next;
}

const l1 = new ListNode(1);
const l2 = new ListNode(2);
const l3 = new ListNode(2);
const l4 = new ListNode(3);
const l5 = new ListNode(4);
const l6 = new ListNode(4);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6

let res = deleteDuplicates(l1);
while (res) {
  console.log(res.val);
  res = res.next;
}