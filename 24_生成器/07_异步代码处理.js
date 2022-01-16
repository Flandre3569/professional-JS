// 用异步函数模仿网络请求
function returnData(url, successCallback, failureCallback) {
 
  // 异步请求代码会被放入到executor中
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 2000)
  })
}

// 进行三次数据访问，每次数据访问后进行拼接

// 第一种方案：回调
// 回调地狱
// returnData("mx").then((res) => {
//   returnData(res + "aaa").then((res) => {
//     returnData(res + "bbb").then((res) => {
//       console.log(res);
//     })
//   })
// })

// 第二种方案：返回值
// returnData("mx").then(res => {
//   return returnData(res + "aaa");
// }).then((res) => {
//   return returnData(res + "bbb");
// }).then((res) => {
//   console.log(res);
// })

// 第三种方案：Promise+Generator实现
function* getData() {
  const res1 = yield returnData("mx");
  const res2 = yield returnData(res1 + "aaa");
  const res3 = yield returnData(res2 + "bbb");
  console.log(res3);
}

// 手动执行生成器
// const generator = getData();
// generator.next().value.then(res => {
//   generator.next(res).value.then(res => {
//     generator.next(res).value.then(res => {
//       generator.next(res);
//     })
//   })
// })

// 封装一个自动化函数自动执行生成器
function execGenerator(genFn) {
  const generator = genFn();
  function exec(res) {
    const result = generator.next(res);
    if (result.done) {
      return result.value
    }
    result.value.then(res => {
      exec(res);
    })
  }

  exec();
}

execGenerator(getData);




