function* foo() {
  console.log("代码开始执行");

  const value1 = 100;
  console.log(value1);
  yield value1;

  const value2 = 200;
  console.log(value2);
  yield value2 * 2;

  const value3 = 300;
  console.log(value3);
  yield;
}

// 调用生成器函数时，会返回一个生成器
const generator = foo();

// 通过生成器的返回值可以看出，生成器就是一个特殊的迭代器
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
