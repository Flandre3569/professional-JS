const promise = new Promise((resolve, reject) => {
  // resolve('resolve message');
  reject('reject message');
})

// fianlly定义的代码，不论是fulfilled状态还是rejected状态，到最后都会执行一次
promise.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log('finally code executor');
})