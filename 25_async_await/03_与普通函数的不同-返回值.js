async function foo() {
  console.log("foo start");
  console.log("code raw one");
  console.log("foo end");

  // 返回thenable (普通值)
  // return {
  //   then: function (resolve, reject) {
  //     resolve("hahahaha")
  //   }
  // }

  // 返回一个Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hahahaha")
    }, 2000)
  })
}

// 异步函数的返回值一定是一个Promise
const promise = foo();
promise.then((res) => {
  console.log("返回值已被接受:", res);
})