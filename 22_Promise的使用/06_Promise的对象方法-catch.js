// 使用reject函数的时候，可以通过then的第二个回调函数获得错误信息
const promise = new Promise((resolve, reject) => {
  // reject('err data');
  // 也可以通过抛出异常的方式通过catch进行捕获
  throw new Error('err data');
})

// promise.then(undefined, (err) => {
//   console.log('err:', err);
// })

// 捕获的错误不是代码报错，而是整个Error对象而已
promise.catch(err => {
  console.log(err);
})