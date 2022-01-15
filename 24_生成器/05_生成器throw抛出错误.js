function* foo() {
  console.log("代码开始执行");
  
  const value1 = 100;
  console.log(value1);
  try {
    yield value1;
  } catch (error) {
    console.log("捕获到异常",error);
  }
  
  // 如果没有进行异常捕获，那么就在此处停止执行之后的代码，抛出异常。
  // yield value1;

  console.log("第二段代码");
  const value2 = 200;
  console.log(value2);

  yield value2;

  console.log("代码终止执行");
}

const generator = foo();

console.log(generator.next());
console.log(generator.throw("error message"));