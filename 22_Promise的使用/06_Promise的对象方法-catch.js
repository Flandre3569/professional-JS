// 使用reject函数的时候，可以通过then的第二个回调函数获得错误信息
const promise = new Promise((resolve, reject) => {
  // reject('err data');
  // 也可以通过抛出异常的方式通过catch进行捕获
  // throw new Error('err data');
  resolve('1111');
})

// 当executor抛出异常时，也是会调用错误的回调函数
// 但是这种写法可读性太差
// promise.then(undefined, (err) => {
//   console.log('err:', err);
// })

// 捕获的错误不是代码报错，而是整个Error对象而已
// 但是不符合promise/a+规范，语法糖而已
// promise.catch(err => {
//   console.log(err);
// })

promise.then((res) => {
  return 'aaaa';
}).catch((err) => {
  console.log(err);
})

promise.then((res) => {
  return new Promise((resolve, reject) => {
    reject('bbbb');
  })
}).catch((err) => {
  console.log(err);
})

// 也可以捕获then中的异常，但是会先优先捕获Promise的异常
promise.then((res) => {
  throw new Error('data error');
}).catch((err) => {
  console.log(err);
})