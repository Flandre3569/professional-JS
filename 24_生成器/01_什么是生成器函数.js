function* foo() {
  console.log("代码开始执行");

  const value1 = 100;
  console.log(value1);
  yield;

  const value2 = 200;
  console.log(value2);
  yield;

  const value3 = 300;
  console.log(value3);
  yield;
}

// 调用生成器函数时，会返回一个生成器
const generator = foo();

// 执行第一段代码，以yield作为分割，在yield处代码会暂停
generator.next();

// 再执行一段代码
generator.next();
