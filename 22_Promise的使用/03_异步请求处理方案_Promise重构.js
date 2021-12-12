
// 用异步函数模仿网络请求
function returnData(url, successCallback, failureCallback) {
 
  // 异步请求代码会被放入到executor中
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'mingxuan3569.xyz') {
        let names = ['james', 'kobe', 'curry'];
        resolve(names);
      } else {
        let message = '请求失败';
        reject(message);
      }
    }, 3000)
  })
  
}

const promise = returnData('mingxuan3569.xyz');
promise.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})