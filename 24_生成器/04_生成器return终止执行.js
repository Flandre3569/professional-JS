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
// 在第二段代码使用return函数，则代表在第一段代码和第二段代码之间加了一个return关键字，
// 则代码将会停止在第一段代码，第二段代码不会执行，但是会将传参返回出来
console.log(generator.return(10));