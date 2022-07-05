// 队列是一个先进先出的数据结构 FIFO

// 从尾部添入一个元素
// 从头部删除一个元素

// 创建队列
const queue = []

queue.push("小红")
queue.push("小白")
queue.push("小黑")
queue.push("小蓝")

while (queue.length) {
  // 访问队首元素
  const queueTop = queue[0];
  console.log('queueTop :>> ', queueTop);

  // 出队
  queue.shift();
}