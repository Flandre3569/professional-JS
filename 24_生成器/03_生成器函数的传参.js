function* foo() {
  console.log("代码开始执行");

  const value1 = 100;
  console.log(value1);
  const n = yield value1;

  const value2 = 200;
  console.log(value2);
  yield value2 * n;

  const value3 = 300;
  console.log(value3);
  yield;
}

// 调用生成器函数时，会返回一个生成器
const generator = foo();


console.log(generator.next());
// 在生成器中传递参数
console.log(generator.next(10));