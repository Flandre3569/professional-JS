// 创建链表结构
function ListNode(val) {
  this.val = val;
  this.next = null;
}


// 新建一个链表
let node = new ListNode(1);
node.next = new ListNode(2);
for (let i = 0; i < 1; i++) {
  console.log('val :>> ', node.val);
  node = node.next;
}


// 插入节点
const node3 = new ListNode(3);
node3.next = node.next;
node.next = node3;

// 删除节点
// 方案一
// node.next = node.next.next;

// 方案二
// node.next = node3.next;

// 方案三
const target = node.next; // 利用node1定位到node3
node.next = target.next;

