async function foo() {
  console.log("foo 开始执行");
  console.log(1);
  console.log(2);
  console.log(3);
  console.log("foo 执行结束");
}

// 在异步函数内部没有特殊处理的情况下，和普通函数的执行顺序是一样的。
console.log("script start");
foo();
console.log("script end");
