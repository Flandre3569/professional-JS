/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const deleteDuplicates = (head) => {
  // 设置游标
  let cur = head;

  while (cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      // 略过重复的节点，相当于删除重复节点
      cur.next = cur.next.next;
    } else {
      // 没有发生重复则继续往后执行
      cur = cur.next;
    }
  }

  return head;
}

const l1 = new ListNode(1);
const l2 = new ListNode(1);
const l3 = new ListNode(2);
l1.next = l2;
l2.next = l3;

let res = deleteDuplicates(l1);
while (res) {
  console.log(res.val);
  res = res.next;
}