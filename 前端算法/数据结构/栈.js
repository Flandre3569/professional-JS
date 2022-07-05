// 后进先出的数据结构

// 从尾部添加元素
// 从尾部取出元素


// 新建栈
const stack = []
// 入栈
stack.push("小红")
stack.push("小白")
stack.push("小黑")
stack.push("小明")

// 出栈
while (stack.length) {

  // 访问栈顶元素
  const stackTop = stack[stack.length - 1];
  console.log('stackTop :>> ', stackTop);
  stack.pop();
}
