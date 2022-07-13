/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 合并链表的主要逻辑
const mergeTwoList = (l1, l2) => {
  // 先定义头结点
  const head = new ListNode();
  // 游标
  let cur = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      // 将游标先放到链表1上
      cur.next = l1;
      // 链表1往下走一步
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    // 游标下移
    cur = cur.next;
  }

  // 链表不相等的情况
  cur.next = l1 !== null ? l1 : l2;
  // 返回起始节点
  return head.next;
}

const l1 = new ListNode(1);
const l2 = new ListNode(2);
const l3 = new ListNode(4);
l1.next = l2;
l2.next = l3;

const l4 = new ListNode(1);
const l5 = new ListNode(3);
const l6 = new ListNode(4);
l4.next = l5;
l5.next = l6;

let res = mergeTwoList(l1, l4);
while (res) {
  console.log(res.val);
  res = res.next;
}