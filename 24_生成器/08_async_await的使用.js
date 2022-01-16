// 用异步函数模仿网络请求
function returnData(url, successCallback, failureCallback) {
 
  // 异步请求代码会被放入到executor中
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 2000)
  })
}

// async和await其实就是生成器的语法糖
async function getData() {
  const res1 = await returnData("mx");
  const res2 = await returnData(res1 + "aaa");
  const res3 = await returnData(res2 + "bbb");
  const res4 = await returnData(res3 + "ccc");
  console.log(res4);
}

getData();

