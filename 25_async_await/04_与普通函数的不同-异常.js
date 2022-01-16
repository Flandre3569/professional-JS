async function foo() {
  console.log("foo start");
  console.log("code raw one");

  throw new Error("message error")
  console.log("foo end");

}

// 在异步函数中抛出的异常会被放到reject中
// 并且异步函数的异常不会影响之后函数的正常执行
const promise = foo();
promise.catch((err) => {
  console.log(err);
})

console.log("代码最后一行");